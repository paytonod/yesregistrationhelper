<<<<<<< HEAD
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('enrollAll called');
    // check if the user is on the appropriate page
    if (tab.url.indexOf("https://acad.app.vanderbilt.edu/more/") !== -1) {
        chrome.tabs.executeScript(tab.id, {"file": "/src/bg/enroll.js"}, () => {
            console.log("enroll.js executed");
        });
    }
});
=======
// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    sendResponse();
  });
>>>>>>> 340926cc3708f2f0c2454e108a6f9148194a1356
