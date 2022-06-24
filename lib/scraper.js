const puppeteer = require('puppeteer');
const LENGTH_SELECTOR_ATTR = 'div[aria-label="Timeline: Explore"] > div';
const TOPIC_SELECTOR_TOP_4 = 'div[aria-label="Timeline: Explore"] >  div > div:nth-child(INDEX) > div > div > div > div > div:nth-child(2) > span > span';
const TOPIC_SELECTOR_AFTER_4 = 'div[aria-label="Timeline: Explore"] >  div > div:nth-child(INDEX) > div > div > div > div > div:nth-child(2) > span';

async function scrollToBottomByMaxHeight() {
  try {
    let previousHeight = 0;
    let currentHeight = document.scrollingElement.scrollHeight;

    while (previousHeight < currentHeight) {
      previousHeight = document.scrollingElement.scrollHeight;
      window.scrollBy(0, previousHeight);
      await new Promise((resolve) => { setTimeout(resolve, 3000); });
      currentHeight = document.scrollingElement.scrollHeight;
    }

    return document.querySelectorAll('a.js-permalink').length;
  } catch (err) {
    return err;
  }
}

async function launch(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  
  await page.evaluate(scrollToBottomByMaxHeight);

  return { browser, page };
}

module.exports = async function getTrends(url) {
  //TODO: page reload for 12 hr -> await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  const { browser, page } = await launch(url);
  const trends = [];

  let listLength = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if(el == null) {
      console.log('null')
      return 0;
    }
    return el.childElementCount;
  }, LENGTH_SELECTOR_ATTR);

  for (let i = 3; i < listLength; i++) {
    // INDEX mapped to 'i' index
    let topicselector;
    if(i - 2 <= 4)
      topicselector = TOPIC_SELECTOR_TOP_4.replace("INDEX", i);
    else 
      topicselector = TOPIC_SELECTOR_AFTER_4.replace("INDEX", i);

    let topic = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if(el != null)
          return document.querySelector(sel).textContent;
      }, topicselector);

    trends.push(topic);
  }

  await browser.close();
  return trends;
}