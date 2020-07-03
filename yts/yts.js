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

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(requestURL);
    const content = await page.content();
    const $ = cheerio.load(content);

    const vidIds = [];

    $("a").each(function (index, elem) {
      if (
        elem.attribs.class ===
        "yt-simple-endpoint inline-block style-scope ytd-thumbnail"
      ) {
        if (elem.attribs.href) {
          if (elem.attribs.href.length === 20) {
            vidIds.push(elem.attribs.href.slice(9));
          }
        }
      }
    });

    browser.close();

    let vidId = "";

    for (let i = 0; i < vidIds.length; i++) {
      if (vidIds[i]) {
        vidId = vidIds[i];
        break;
      }
    }

    if (vidId === "") {
      return undefined;
    } else {
      return { vidId, title, artist };
    }
  } catch (e) {
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

module.exports = {
  getSearchResult,
  getSearchVids,
};
