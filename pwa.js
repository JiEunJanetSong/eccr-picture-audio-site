(function () {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const workerUrl = new URL("sw.js", scriptUrl);

  window.addEventListener("load", () => {
    navigator.serviceWorker.register(workerUrl).catch((error) => {
      console.warn("ECCR offline cache registration failed", error);
    });
  });
})();
