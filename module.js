import puppeteer from 'puppeteer';
import {deleteAsync} from 'del';
import fs from 'fs';

const screenshot_path = './screenshots/';

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export async function clear() {
    await deleteAsync([`${screenshot_path}`]);
    if (!fs.existsSync(screenshot_path)) fs.mkdirSync(screenshot_path);
    fs.appendFileSync(screenshot_path + '.gitkeep', '');
}

export async function openbrowser (name, url, width, height, ext = 'png', sleeptime = 1000) {
    const browser = await puppeteer.launch({ headless: false, defaultViewport: {width:width, height:height} });
    const page = await browser.newPage();
    await page.goto(url);
    await sleep(sleeptime);
    await page.screenshot({path: screenshot_path + name + '.' + ext});
    browser.close();
}

export default openbrowser;
