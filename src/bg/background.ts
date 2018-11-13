chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  sendResponse("Default response");
});
