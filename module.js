const puppeteer = require('puppeteer');
const del = require('del');
const fs = require('fs');

const screenshot_path = './screenshots/';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function clear() {
    await del([`${screenshot_path}`]);
    if (!fs.existsSync(screenshot_path)) fs.mkdirSync(screenshot_path);
}

async function openbrowser (name, url, width, height, ext = 'png', sleeptime = 1000) {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: {width:width, height:height} });
    const page = await browser.newPage();
    await page.goto(url);
    await sleep(sleeptime);
    await page.screenshot({path: screenshot_path + name + '.' + ext});
    browser.close();
}

exports.default = openbrowser;
exports.sleep = sleep;
exports.clear = clear;
exports.clean = clear;
exports.openbrowser = openbrowser;