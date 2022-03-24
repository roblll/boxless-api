// const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
// const puppeteer = require("puppeteer");

const YOUTUBE_BASE_URL = "http://www.youtube.com";
const YOUTUBE_SEARCH_URL = `${YOUTUBE_BASE_URL}/results?search_query=`;

async function getSearchResult(search) {
  try {
    const { searchTerm, title, artist } = search;

    const formattedSearchTerm = searchTerm.replace(/ /g, "+") + "hq+audio+";
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

function getIndicesOf(searchStr, str) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0,
    index,
    indices = [];
  let count = 0;
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
    count += 1;
    if (count === 10) break;
  }
  return indices;
}

async function getSearchVids(searchTerm) {
  try {
    const formattedSearchTerm = searchTerm.replace(/ /g, "+");
    const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

    const response = await axios.get(requestURL);
    const html = response.data;

    const indices = getIndicesOf("videoRenderer", html, true);

    const vids = [];

    for (const i of indices) {
      const vidId = html.slice(i + 27, i + 38);

      const titleStart = html.indexOf(`"title":{"runs":[{"text":"`, i);
      const titleEnd = html.indexOf(`"}],"accessibility"`, titleStart);
      const title = html.slice(titleStart + 26, titleEnd);

      const timeStart = html.indexOf(
        `"lengthText":{"accessibility":{"accessibilityData":{"label":"`,
        titleEnd
      );
      const timeStop = html.indexOf(`}},"simpleText":"`, timeStart);
      const time = "  " + html.slice(timeStart + 61, timeStop - 1);

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

      const rawTitle = `"${title}"`;
      const parsedTitle = decodeURIComponent(JSON.parse(rawTitle));

      vids.push({ vidId, title: parsedTitle, vidLength });
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
