chrome.browserAction.onClicked.addListener((tab) => {
  console.log("enrollAll called");
  // check if the user is on the appropriate page
  if (tab.url.indexOf("https://acad.app.vanderbilt.edu/more/") !== -1) {
    chrome.tabs.executeScript(tab.id, { file: "/src/bg/enroll.js" }, () => {
      console.log("enroll.js executed");
    });
  }
});
