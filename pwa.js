(function () {
  const offlineButton = document.getElementById("offlineBtn");

  function setOfflineStatus(label, state) {
    if (!offlineButton) {
      return;
    }
    offlineButton.textContent = label;
    offlineButton.dataset.state = state;
  }

  if (!("serviceWorker" in navigator)) {
    setOfflineStatus("Offline unavailable", "error");
    return;
  }

  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const workerUrl = new URL("sw.js", scriptUrl);
  let registration = null;

  function getWorker() {
    return registration?.active || registration?.waiting || registration?.installing || navigator.serviceWorker.controller;
  }

  function requestOfflineSave() {
    const worker = getWorker();
    if (!worker) {
      setOfflineStatus("Preparing offline", "saving");
      return;
    }
    setOfflineStatus("Saving 0%", "saving");
    worker.postMessage({ type: "CACHE_ALL_OFFLINE_ASSETS" });
  }

  function checkOfflineStatus() {
    const worker = getWorker();
    if (worker) {
      worker.postMessage({ type: "CHECK_OFFLINE_STATUS" });
    }
  }

  offlineButton?.addEventListener("click", requestOfflineSave);

  navigator.serviceWorker.addEventListener("message", (event) => {
    const message = event.data || {};
    if (message.type === "OFFLINE_STATUS") {
      if (message.complete >= message.total && message.total > 0) {
        setOfflineStatus("Offline ready", "ready");
      } else if (navigator.onLine) {
        requestOfflineSave();
      } else {
        setOfflineStatus("Connect to finish", "error");
      }
    }
    if (message.type === "OFFLINE_PROGRESS") {
      const percent = Math.round((message.complete / Math.max(1, message.total)) * 100);
      setOfflineStatus(`Saving ${percent}%`, "saving");
    }
    if (message.type === "OFFLINE_READY") {
      setOfflineStatus("Offline ready", "ready");
    }
    if (message.type === "OFFLINE_ERROR") {
      setOfflineStatus("Tap to retry", "error");
    }
  });

  navigator.serviceWorker.addEventListener("controllerchange", checkOfflineStatus);

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(workerUrl, { updateViaCache: "none" })
      .then(async (currentRegistration) => {
        registration = currentRegistration;
        if (navigator.onLine) {
          currentRegistration.update().catch(() => {});
        }
        registration = await navigator.serviceWorker.ready;
        checkOfflineStatus();
      })
      .catch((error) => {
        setOfflineStatus("Tap to retry", "error");
        console.warn("ECCR offline cache registration failed", error);
      });
  });

  window.addEventListener("online", checkOfflineStatus);
})();
