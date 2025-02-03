document.addEventListener('DOMContentLoaded', function() {
  const savedText = document.getElementById('savedText');
  const saveButton = document.getElementById('saveButton');

  // Load saved text when popup opens
  chrome.storage.sync.get(['savedText'], function(result) {
    savedText.value = result.savedText || '';
  });

  saveButton.addEventListener('click', function() {
    chrome.storage.sync.set({savedText: savedText.value}, function() {
      console.log('Text saved');
    });
  });
});
