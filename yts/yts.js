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

    const response = await axios.get(requestURL);
    const html = response.data;

    const vidIdIndex = html.search("videoRenderer");
    const vidId = html.slice(vidIdIndex + 27, vidIdIndex + 38);

    const timeIndex = html.search(" ago ");
    const time = html.slice(timeIndex, timeIndex + 50);

    const secondsIndex = time.search("second") - 3;
    let seconds = 0;
    if (secondsIndex > 0) {
      seconds = parseInt(time.slice(secondsIndex, secondsIndex + 2));
    }

    const minutesIndex = time.search("minute") - 3;
    let minutes = 0;
    if (minutesIndex > 0) {
      minutes = parseInt(time.slice(minutesIndex, minutesIndex + 2));
    }

    const hoursIndex = time.search("hour") - 3;
    let hours = 0;
    if (hoursIndex > 0) {
      hours = parseInt(time.slice(hoursIndex, hoursIndex + 2));
    }

    const vidLength = hours * 60 * 60 + minutes * 60 + seconds;

    if (vidId === "" || vidLength === "") {
      return undefined;
    } else {
      return { vidId, vidLength, title, artist };
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

async function getSearchVids(searchTerm) {
  try {
    const formattedSearchTerm = searchTerm.replace(/ /g, "+");
    const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
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
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
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
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
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
