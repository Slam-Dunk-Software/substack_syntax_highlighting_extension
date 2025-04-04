chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("substack.com")
  ) {
    chrome.tabs.executeScript(tabId, { file: "inject.js" });
  }
});
