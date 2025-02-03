chrome.commands.onCommand.addListener((command) => {
  if (command === "paste-saved-text") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "pasteText"});
      }
    });
  }
});

// This will keep the service worker active
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener((tab) => {
    // This is just to keep the service worker alive
  });
});
