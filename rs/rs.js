const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const REDDIT_BASE_URL = "http://www.reddit.com";

const { getRandNum, getUrlParams } = require("../utils/utils");

const getVidId = (url) => {
  if (url.indexOf("youtube") !== -1) {
    let trimmed = url.slice(32);
    if (trimmed.indexOf("&") === -1) {
      return trimmed;
    } else {
      return trimmed.slice(0, trimmed.indexOf("&"));
    }
  } else if (url.indexOf("youtu.be")) {
    let trimmed = url.slice(17);
    if (trimmed.indexOf("&") === -1) {
      return trimmed;
    } else {
      return trimmed.slice(0, trimmed.indexOf("&"));
    }
  } else {
    return null;
  }
};

async function getRVid(genre, pageId, test) {
  try {
    let requestURL = `https://old.reddit.com/r/hiphopheads/new`;
    // if (pageId !== "") {
    //   requestURL = `${requestURL}?count=25&after=${pageId}`;
    // }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(requestURL);
    const content = await page.content();
    const $ = cheerio.load(content);

    const vids = [];
    let hiphopAfter = "";
    let hiphopCount = "";

    $("a").each(function (index, elem) {
      if (elem.attribs.rel === "nofollow next") {
        const { count, after } = getUrlParams(
          elem.attribs.href.replace(
            "https://old.reddit.com/r/hiphopheads/new/",
            ""
          )
        );
        hiphopAfter = after;
        hiphopCount = count;
      }
      if (
        elem.attribs.class === "title may-blank outbound" &&
        elem.attribs.href.indexOf("youtu") !== -1
      ) {
        vids.push(elem.attribs.href);
      }
    });

    vidIds = [];
    vids.forEach((element) => {
      const id = getVidId(element);
      if (id) vidIds.push(id);
    });

    const randomVidIndex = getRandNum(0, vids.length - 1);

    browser.close();

    return { vidId: vidIds[randomVidIndex], hiphopAfter, hiphopCount };
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

module.exports = {
  getRVid,
};
