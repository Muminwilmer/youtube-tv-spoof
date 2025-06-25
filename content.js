(() => {
  const Switch_UA = "Mozilla/5.0 (Nintendo Switch; WebApplet) AppleWebKit/609.4 (KHTML, like Gecko) NF/6.0.2.20.5 NintendoBrowser/5.1.0.22023 Dalvik/2.1.0 (Linux; U; Android 5.1.1; AEOBC Build/LVY48f)";

  Object.defineProperty(navigator, "userAgent", {
    get: () => Switch_UA,
    configurable: true
  });
})();
