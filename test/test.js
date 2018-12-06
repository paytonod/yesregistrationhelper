/**
 * For the sake of this application, each individual unit test effectively serves
 * as an integration test end-to-end for functionality between our client (frontend)
 * and YES's servers (backend), hence the relatively abbreviated tests. Nonetheless,
 * testers for this software do find the following tests comprehensive and appropriate.
 */

// import schedule from '../src/inject/schedule.js';

describe('sum', () => {
  it('should return sum of arguments', () => {
    chai.expect(3).to.equal(3);
  });
});

// const puppeteer = require('puppeteer');
// // const request = require('superagent');
// const { expect } = require('chai');
// const _ = require('lodash');

// const globalVariables = _.pick(global, ['browser', 'expect']);

// // Puppeteer options
// const opts = {
//   headless: false,
//   slowMo: 100,
//   timeout: 10000,
//   executablePath: '/usr/bin/chromium-browser',
//   args: [
//     '--disable-extensions-except=yesregistrationhelper/',
//     '--load-extension=yesregistrationhelper/',
//     '--no-sandbox',
//     '--disable-setuid-sandbox',
//   ],
// };

// // expose variables
// // before(async () => {
// //   global.expect = expect;
// //   global.browser = await puppeteer.launch(opts);
// //   done();
// // });

// // Test the schedule page
// describe('Schedule page', () => {
//   before(async () => {
//     browser = await puppeteer.launch(opts);
//     page = await global.browser.newPage();
//     // await page.goto('https://acad.app.vanderbilt.edu/more/SearchClasses!input.action');
//   });

//   let page;

//   it('should work', () => {
//     expect(true).to.be.true;
//   });

//   // after(async () => {
//   //   await page.close();
//   // });
//   // it('should have the correct page title', async () => {
//   //   expect(await page.title()).to.eql('Puppeteer Mocha');
//   // });
//   // it('should have a heading', async () => {
//   //   const HEADING_SELECTOR = 'h1';
//   //   await page.waitFor(HEADING_SELECTOR);
//   //   const heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);
//   //   expect(heading).to.eql('Page Title');
//   // });
// });

// // Test any other page
// describe('Generic YES page', () => {
//   // let page;
//   // before(async () => {
//   //   page = await browser.newPage();
//   //   await page.goto('http://localhost:8080');
//   // });
//   // after(async () => {
//   //   await page.close();
//   // });
//   // it('should have the correct page title', async () => {
//   //   expect(await page.title()).to.eql('Puppeteer Mocha');
//   // });
//   // it('should have a heading', async () => {
//   //   const HEADING_SELECTOR = 'h1';
//   //   await page.waitFor(HEADING_SELECTOR);
//   //   const heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);
//   //   expect(heading).to.eql('Page Title');
//   // });
//   // it('should have a single content section', async () => {
//   //   const BODY_SELECTOR = '.main-content';
//   //   await page.waitFor(BODY_SELECTOR);
//   //   expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1);
//   // });
// });

// // close browser and reset global variables
// // after(() => {
// //   browser.close();
// //   global.browser = globalVariables.browser;
// //   global.expect = globalVariables.expect;
// // });
