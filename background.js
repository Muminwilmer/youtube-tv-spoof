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

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        const currentTab = tabs[0];
        if (currentTab.url && currentTab.url.includes("youtube.com/tv")) {
            return;
        }
        // If not, open YouTube TV in a new tab
        browser.tabs.create({ url: "https://www.youtube.com/tv" });
    });
});
