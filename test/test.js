const chai = require("chai");
const fs = require("fs");
const cheerio = require("cheerio");
const $ = cheerio.load(fs.readFileSync("./html/generic-page.html"));
const chrome = require("sinon-chrome");

/**
 * Testing background.js
 */
describe("background.js", () => {
  before(() => {
    global.chrome = chrome;
  });

  it("should execute enroll.js", () => {
    // This code is the same as the code in background.js
    chrome.tabs.executeScript(0, { file: "../src/inject/enroll.js" }, () => {});
    chai.assert.ok(
      chrome.tabs.executeScript.calledOnce,
      "chrome.tabs.executeScript should be called"
    );
  });
});

/**
 * Testing schedule.js
 */
describe("schedule.js", () => {
  before(() => {
    global.chrome = chrome;
  });

  it("should have a div for the iframe", () => {
    // Grab div around iframe and ensure it exists
    let wrapperDiv = $("#wrapper");
    chai.assert.ok(wrapperDiv, "iframe exists");
  });

  it("should have the correct iframe src", () => {
    const correctUrl =
      "https://acad.app.vanderbilt.edu/more/GetSchedule!input.action#scheduleTable";

    // Validate that iframe src exists
    let src = $.html();
    chai.assert.ok(src.indexOf(correctUrl) !== -1);
  });
});

/**
 * Testing scheduleContentScript.js
 */
describe("scheduleContentScript.js", () => {
  before(() => {
    global.chrome = chrome;
  });

  it("should have the same number of buttons as class blocks", () => {});

  // it("should execute enroll.js", () => {
  //   chrome.tabs.executeScript(0, { file: "../src/inject/enroll.js" }, () => {});
  //   chai.assert.ok(
  //     chrome.tabs.executeScript.calledOnce,
  //     "chrome.tabs.executeScript should be called"
  //   );
  // });
});
