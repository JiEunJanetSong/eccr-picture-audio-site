importScripts("./offline-assets.js");

const CACHE_NAME = "eccr-airplane-20260904-1";
const CACHE_PREFIX = "eccr-";
const OFFLINE_ASSETS = self.ECCR_OFFLINE_ASSETS || [];
const CORE_ASSETS = OFFLINE_ASSETS.filter(
  (asset) => !asset.includes("/assets/book") && !asset.includes("/audio/book3/")
);
const CACHE_BATCH_SIZE = 4;
let offlineCacheJob = null;

function toAbsoluteUrl(asset) {
  return new URL(asset, self.registration.scope).href;
}

async function cacheAsset(cache, asset) {
  const request = new Request(toAbsoluteUrl(asset), {
    cache: "reload",
    credentials: "same-origin",
  });
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`Could not cache ${asset}: ${response.status}`);
  }
  await cache.put(request, response);
}

async function cacheCoreAssets() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.allSettled(CORE_ASSETS.map((asset) => cacheAsset(cache, asset)));
}

async function getOfflineStatus() {
  const cache = await caches.open(CACHE_NAME);
  const matches = await Promise.all(
    OFFLINE_ASSETS.map((asset) => cache.match(toAbsoluteUrl(asset), { ignoreSearch: true }))
  );
  return {
    complete: matches.filter(Boolean).length,
    total: OFFLINE_ASSETS.length,
  };
}

async function broadcast(message) {
  const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  clients.forEach((client) => client.postMessage(message));
}

async function cacheAllOfflineAssets() {
  const cache = await caches.open(CACHE_NAME);
  const missingAssets = [];

  for (const asset of OFFLINE_ASSETS) {
    const cached = await cache.match(toAbsoluteUrl(asset), { ignoreSearch: true });
    if (!cached) {
      missingAssets.push(asset);
    }
  }

  let complete = OFFLINE_ASSETS.length - missingAssets.length;
  let failed = 0;
  await broadcast({ type: "OFFLINE_PROGRESS", complete, total: OFFLINE_ASSETS.length });

  for (let index = 0; index < missingAssets.length; index += CACHE_BATCH_SIZE) {
    const batch = missingAssets.slice(index, index + CACHE_BATCH_SIZE);
    const results = await Promise.allSettled(batch.map((asset) => cacheAsset(cache, asset)));
    complete += results.filter((result) => result.status === "fulfilled").length;
    failed += results.filter((result) => result.status === "rejected").length;
    await broadcast({ type: "OFFLINE_PROGRESS", complete, total: OFFLINE_ASSETS.length });
  }

  if (failed === 0 && complete === OFFLINE_ASSETS.length) {
    await broadcast({ type: "OFFLINE_READY", complete, total: OFFLINE_ASSETS.length });
  } else {
    await broadcast({ type: "OFFLINE_ERROR", complete, total: OFFLINE_ASSETS.length, failed });
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    cacheCoreAssets()
      .then(() => cacheAllOfflineAssets())
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "CHECK_OFFLINE_STATUS") {
    event.waitUntil(
      getOfflineStatus().then((status) => broadcast({ type: "OFFLINE_STATUS", ...status }))
    );
  }

  if (event.data?.type === "CACHE_ALL_OFFLINE_ASSETS") {
    if (!offlineCacheJob) {
      offlineCacheJob = cacheAllOfflineAssets().finally(() => {
        offlineCacheJob = null;
      });
    }
    event.waitUntil(offlineCacheJob);
  }
});

async function createRangeResponse(request, cachedResponse) {
  const range = request.headers.get("range");
  if (!range) {
    return cachedResponse;
  }

  const blob = await cachedResponse.blob();
  const match = /^bytes=(\d*)-(\d*)$/i.exec(range.trim());
  if (!match) {
    return cachedResponse;
  }

  const startText = match[1];
  const endText = match[2];
  let start;
  let end;

  if (!startText && endText) {
    const suffixLength = Number(endText);
    start = Math.max(0, blob.size - suffixLength);
    end = blob.size - 1;
  } else {
    start = Number(startText || 0);
    end = endText ? Math.min(Number(endText), blob.size - 1) : blob.size - 1;
  }

  if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= blob.size) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${blob.size}` },
    });
  }

  const body = blob.slice(start, end + 1);
  return new Response(body, {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": String(body.size),
      "Content-Range": `bytes ${start}-${end}/${blob.size}`,
      "Content-Type": cachedResponse.headers.get("Content-Type") || blob.type || "application/octet-stream",
    },
  });
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(event.request, { ignoreSearch: true });
      if (cached) {
        return createRangeResponse(event.request, cached);
      }

      try {
        const response = await fetch(event.request);
        if (response.status === 200 && !event.request.headers.has("range")) {
          await cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        if (event.request.mode === "navigate") {
          const fallback =
            (await cache.match(toAbsoluteUrl("./picturebook/index.html"), { ignoreSearch: true })) ||
            (await cache.match(toAbsoluteUrl("./index.html"), { ignoreSearch: true }));
          if (fallback) {
            return fallback;
          }
        }
        throw error;
      }
    })()
  );
});
