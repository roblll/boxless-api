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

async function getRVid(
  genre,
  hiphopAfter,
  hiphopCount,
  houseAfter,
  houseCount,
  tranceAfter,
  tranceCount
) {
  try {
    let srName = "";
    let count = "";
    let after = "";
    if (genre === "hiphop") {
      srName = "hiphopheads";
      count = hiphopCount;
      after = hiphopAfter;
    }
    if (genre === "house") {
      srName = "house";
      count = houseCount;
      after = houseAfter;
    }
    if (genre === "trance") {
      srName = "trance";
      count = tranceCount;
      after = tranceAfter;
    }

    let requestURL = `https://old.reddit.com/r/${srName}/new`;
    if (after) {
      requestURL = `${requestURL}?count=${count}&after=${after}`;
    }

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(requestURL);
    const content = await page.content();
    const $ = cheerio.load(content);

    const vids = [];
    let newAfter = "";
    let newCount = "";

    $("a").each(function (index, elem) {
      if (elem.attribs.rel === "nofollow next") {
        if (genre === "hiphop") {
          const { count, after } = getUrlParams(
            elem.attribs.href.replace(
              `https://old.reddit.com/r/${srName}/new/`,
              ""
            )
          );
          newAfter = after;
          newCount = count;
        }
        if (genre === "house") {
          const { count, after } = getUrlParams(elem.attribs.href.slice(35));
          newAfter = after;
          newCount = count;
        }
        if (genre === "trance") {
          const { count, after } = getUrlParams(elem.attribs.href.slice(36));
          newAfter = after;
          newCount = count;
        }
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

    console.log("after", newAfter);
    console.log("count", newCount);

    if (genre === "hiphop") {
      if (newAfter && newCount) {
        hiphopAfter = newAfter;
        hiphopCount = newCount;
      } else {
        hiphopAfter = after;
        hiphopCount = count;
      }
    }
    if (genre === "house") {
      if (newAfter && newCount) {
        houseAfter = newAfter;
        houseCount = newCount;
      } else {
        houseAfter = after;
        houseCount = count;
      }
    }
    if (genre === "trance") {
      if (newAfter && newCount) {
        tranceAfter = newAfter;
        tranceCount = newCount;
      } else {
        tranceAfter = after;
        tranceCount = count;
      }
    }

    browser.close();

    return {
      vidId: vidIds[randomVidIndex],
      hiphopAfter,
      hiphopCount,
      houseAfter,
      houseCount,
      tranceAfter,
      tranceCount,
    };

    // HERE!!!!!

    // let requestURL = `https://old.reddit.com/r/hiphopheads/new`;
    // if (a) {
    //   requestURL = `${requestURL}?count=${c}&after=${a}`;
    // }
    // console.log(requestURL);

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(requestURL);
    // const content = await page.content();
    // const $ = cheerio.load(content);

    // const vids = [];
    // let hiphopAfter = "";
    // let hiphopCount = "";

    // $("a").each(function (index, elem) {
    //   if (elem.attribs.rel === "nofollow next") {
    //     const { count, after } = getUrlParams(
    //       elem.attribs.href.replace(
    //         "https://old.reddit.com/r/hiphopheads/new/",
    //         ""
    //       )
    //     );
    //     hiphopAfter = after;
    //     hiphopCount = count;
    //   }
    //   if (
    //     elem.attribs.class === "title may-blank outbound" &&
    //     elem.attribs.href.indexOf("youtu") !== -1
    //   ) {
    //     vids.push(elem.attribs.href);
    //   }
    // });

    // vidIds = [];
    // vids.forEach((element) => {
    //   const id = getVidId(element);
    //   if (id) vidIds.push(id);
    // });

    // const randomVidIndex = getRandNum(0, vids.length - 1);

    // browser.close();

    // return { vidId: vidIds[randomVidIndex], hiphopAfter, hiphopCount };

    // HERE!!!!!!!!!!

    // let requestURL = `https://old.reddit.com/r/house/new`;
    // if (a) {
    //   requestURL = `${requestURL}?count=${c}&after=${a}`;
    // }
    // console.log(requestURL);

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(requestURL);
    // const content = await page.content();
    // const $ = cheerio.load(content);

    // const vids = [];
    // let hiphopAfter = "";
    // let hiphopCount = "";

    // $("a").each(function (index, elem) {
    //   if (elem.attribs.rel === "nofollow next") {
    //     const { count, after } = getUrlParams(elem.attribs.href.slice(35));
    //     console.log(elem.attribs.href.slice(36));
    //     console.log(getUrlParams(elem.attribs.href.slice(35)));
    //     hiphopAfter = after;
    //     hiphopCount = count;
    //   }
    //   if (
    //     elem.attribs.class === "title may-blank outbound" &&
    //     elem.attribs.href.indexOf("youtu") !== -1
    //   ) {
    //     vids.push(elem.attribs.href);
    //   }
    // });

    // vidIds = [];
    // vids.forEach((element) => {
    //   const id = getVidId(element);
    //   if (id) vidIds.push(id);
    // });

    // const randomVidIndex = getRandNum(0, vids.length - 1);

    // browser.close();

    // return { vidId: vidIds[randomVidIndex], hiphopAfter, hiphopCount };

    // HERE !!!!!!!!

    // let requestURL = `https://old.reddit.com/r/trance/new`;
    // if (a) {
    //   requestURL = `${requestURL}?count=${c}&after=${a}`;
    // }
    // console.log(requestURL);

    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto(requestURL);
    // const content = await page.content();
    // const $ = cheerio.load(content);

    // const vids = [];
    // let hiphopAfter = "";
    // let hiphopCount = "";

    // $("a").each(function (index, elem) {
    //   if (elem.attribs.rel === "nofollow next") {
    //     const { count, after } = getUrlParams(elem.attribs.href.slice(36));
    //     console.log(elem.attribs.href.slice(36));
    //     console.log(getUrlParams(elem.attribs.href.slice(35)));
    //     hiphopAfter = after;
    //     hiphopCount = count;
    //   }
    //   if (
    //     elem.attribs.class === "title may-blank outbound" &&
    //     elem.attribs.href.indexOf("youtu") !== -1
    //   ) {
    //     vids.push(elem.attribs.href);
    //   }
    // });

    // vidIds = [];
    // vids.forEach((element) => {
    //   const id = getVidId(element);
    //   if (id) vidIds.push(id);
    // });

    // const randomVidIndex = getRandNum(0, vids.length - 1);

    // browser.close();

    // return { vidId: vidIds[randomVidIndex], hiphopAfter, hiphopCount };
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

module.exports = {
  getRVid,
};
