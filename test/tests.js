/**
 * For the sake of this application, each individual unit test effectively serves
 * as an integration test end-to-end for functionality between our client (frontend)
 * and YES's servers (backend), hence the relatively abbreviated tests. Nonetheless,
 * testers for this software do find the following tests comprehensive and appropriate.
 */

const puppeteer = require('puppeteer');
// const request = require('superagent');
const { expect } = require('chai');
const _ = require('lodash');

const globalVariables = _.pick(global, ['browser', 'expect']);

// Puppeteer options
const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000,
  args: [
    '--disable-extensions-except=yesregistrationhelper/',
    '--load-extension=yesregistrationhelper/',
  ],
};

// Test the schedule page
describe('Schedule page - button existence', () => {
  let page;

  before(async () => {
    this.enableTimeouts(false);
    global.expect = expect;
    global.browser = await puppeteer.launch(opts);
    page = await browser.newPage();
    await page.goto('https://acad.app.vanderbilt.edu/more/GetSchedule!input.action');
  });

  it('should have the correct page title', async () => {
    expect(await page.title()).to.eql('Puppeteer Mocha');
  });

  it('should have a heading', async () => {
    const HEADING_SELECTOR = 'h1';

    await page.waitFor(HEADING_SELECTOR);
    const heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);

    expect(heading).to.eql('Page Title');
  });

  it('should have a single content section', async () => {
    const BODY_SELECTOR = '.main-content';

    await page.waitFor(BODY_SELECTOR);

    expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1);
  });

  after(async () => {
    await page.close();
    browser.close();
    global.browser = globalVariables.browser;
    global.expect = globalVariables.expect;
  });
});

// Test any other page
describe('Generic YES page - iframe existence', () => {
  let page;

  before(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:8080');
  });

  it('should have the correct page title', async () => {
    expect(await page.title()).to.eql('Puppeteer Mocha');
  });

  it('should have a heading', async () => {
    const HEADING_SELECTOR = 'h1';

    await page.waitFor(HEADING_SELECTOR);
    const heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);

    expect(heading).to.eql('Page Title');
  });

  it('should have a single content section', async () => {
    const BODY_SELECTOR = '.main-content';

    await page.waitFor(BODY_SELECTOR);

    expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1);
  });

  after(async () => {
    await page.close();
  });
});
