chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "pasteText") {
    chrome.storage.sync.get(['savedText'], function(result) {
      const savedText = result.savedText || '';
      const activeElement = document.activeElement;
      
      if (activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'INPUT') {
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        activeElement.value = activeElement.value.substring(0, start) + savedText + activeElement.value.substring(end);
        activeElement.selectionStart = activeElement.selectionEnd = start + savedText.length;
      } else if (activeElement.isContentEditable) {
        document.execCommand('insertText', false, savedText);
      }
    });
  }
});

// This will log when the content script is injected
console.log('Text Saver and Paster content script loaded');
