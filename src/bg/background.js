// Add a listener for the extension icon being clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    // Log that the icon was clicked
    console.log('Icon clicked!');

    // Execute schedule.js
    chrome.tabs.executeScript(null, {
        file: "/src/inject/schedule.js"
    });
});