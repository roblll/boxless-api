const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const puppeteer = require("puppeteer");

const YOUTUBE_BASE_URL = "http://www.youtube.com";
const YOUTUBE_SEARCH_URL = `${YOUTUBE_BASE_URL}/results?search_query=`;

async function getSearchResult(search) {
  try {
    const { searchTerm, title, artist } = search;

    const formattedSearchTerm = searchTerm.replace(/ /g, "+");
    const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

    console.log(requestURL);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(requestURL);
    const content = await page.content();

    console.log(content);

    const $ = cheerio.load(content);

    const vidIds = [];
    const vidLengths = [];

    $("a").each(function (index, elem) {
      if (
        elem.attribs.class ===
        "yt-simple-endpoint style-scope ytd-video-renderer"
      ) {
        if (elem.attribs.href) {
          if (elem.attribs.href.length === 20) {
            vidIds.push(elem.attribs.href.slice(9));

            const label = elem.children[0].parent.attribs["aria-label"];

            let seconds = 0;
            const indexOfSeconds = label.lastIndexOf("second") - 2;
            if (indexOfSeconds > 0) {
              seconds = parseInt(
                `${label[indexOfSeconds - 1]}${label[indexOfSeconds]}`
              );
            }

            let minutes = 0;
            const indexOfMinutes = label.lastIndexOf("minute") - 2;
            if (indexOfMinutes > 0) {
              minutes = parseInt(
                `${label[indexOfMinutes - 1]}${label[indexOfMinutes]}`
              );
            }

            let hours = 0;
            const indexOfHours = label.lastIndexOf("hour") - 2;
            if (indexOfHours > 0) {
              hours = parseInt(
                `${label[indexOfHours - 1]}${label[indexOfHours]}`
              );
            }

            vidLengths.push(hours * 60 * 60 + minutes * 60 + seconds);
          }
        }
      }
    });

    browser.close();

    let vidId = "";
    let vidLength = "";

    console.log(vidIds);
    console.log(vidLengths);

    for (let i = 0; i < vidIds.length; i++) {
      if (vidIds[i] && vidLengths[i] !== 0) {
        vidId = vidIds[i];
        vidLength = vidLengths[i];
        break;
      }
    }

    if (vidId === "" || vidLength === "") {
      return undefined;
    } else {
      return { vidId, vidLength, title, artist };
    }
  } catch (e) {
    console.log("error");
    return undefined;
  }
}

async function getSearchVids(searchTerm) {
  try {
    const formattedSearchTerm = searchTerm.replace(/ /g, "+");
    const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(requestURL);
    const content = await page.content();
    const $ = cheerio.load(content);

    const vidIds = [];
    const vidTitles = [];
    const vids = [];

    $("a").each(function (index, elem) {
      if (
        elem.attribs.class ===
        "yt-simple-endpoint style-scope ytd-video-renderer"
      ) {
        if (elem.attribs.href) {
          if (elem.attribs.href.length === 20) {
            vidIds.push(elem.attribs.href.slice(9));
            vidTitles.push(elem.attribs.title);
          }
        }
      }
    });

    browser.close();

    for (i = 0; i < vidIds.length; i++) {
      if (vidIds[i]) {
        vids.push({ vidId: vidIds[i], title: vidTitles[i] });
      }
    }
    if (vids.length === 0) {
      return { searchTerm, vids: undefined };
    } else {
      return { searchTerm, vids };
    }
  } catch (e) {
    console.log(e);
  }
}

async function getTitle(vidId) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/watch?v=${vidId}`);
    const content = await page.content();
    const $ = cheerio.load(content);

    let title = "";

    $("title").each(function (index, elem) {
      console.log(elem.children[0].data);
      title = elem.children[0].data;
    });

    title = title.replace(" - YouTube", "");
    console.log(title);

    browser.close();

    return { title };
  } catch (e) {
    return e;
  }
}

async function getTitleAndLength(vidId) {
  console.log(vidId);
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/watch?v=${vidId}`);
    const content = await page.content();
    const $ = cheerio.load(content);

    let title = "";

    $("title").each(function (index, elem) {
      console.log(elem.children[0].data);
      title = elem.children[0].data;
    });

    title = title.replace(" - YouTube", "");
    console.log(title);

    browser.close();

    return { title };
  } catch (e) {
    return e;
  }
}

module.exports = {
  getSearchResult,
  getSearchVids,
  getTitle,
  getTitleAndLength,
};
