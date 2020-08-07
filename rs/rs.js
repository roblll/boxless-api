const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const REDDIT_BASE_URL = "http://www.reddit.com";

async function getRSong(search) {
  try {
    const requestURL = `https://old.reddit.com/r/hiphopheads/`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(requestURL);
    const content = await page.content();
    const $ = cheerio.load(content);

    const vids = [];

    $("a").each(function (index, elem) {
      if (
        elem.attribs.class === "title may-blank outbound" &&
        elem.attribs.href.indexOf("youtu") !== -1
      ) {
        vids.push(elem.attribs.href);
      }
    });

    return { vids: vids };
    // return { test: content };
  } catch (e) {
    return undefined;
  }
}

module.exports = {
  getRSong,
};
