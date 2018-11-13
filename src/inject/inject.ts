chrome.runtime.sendMessage({}, function(res) {
  let readyStateCheckInterval: number = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
    }
  }, 0);
});
