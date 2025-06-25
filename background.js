const Switch_UA = "Mozilla/5.0 (Nintendo Switch; WebApplet) AppleWebKit/609.4 (KHTML, like Gecko) NF/6.0.2.20.5 NintendoBrowser/5.1.0.22023 Dalvik/2.1.0 (Linux; U; Android 5.1.1; AEOBC Build/LVY48f)";

browser.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    for (let header of details.requestHeaders) {
      if (header.name.toLowerCase() === "user-agent") {
        header.value = Switch_UA;
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["*://www.youtube.com/tv*"] },
  ["blocking", "requestHeaders"]
);

// Send to main page on extension press
browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({ url: "https://www.youtube.com/tv" });
});
