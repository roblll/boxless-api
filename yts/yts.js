const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");

const YOUTUBE_BASE_URL = "http://www.youtube.com";
const YOUTUBE_SEARCH_URL = `${YOUTUBE_BASE_URL}/results?search_query=`;

// function getSearchResult(search, cb) {
//   const { searchTerm, title, artist } = search;

//   const formattedSearchTerm = searchTerm.replace(/ /g, "+");
//   const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

//   request(requestURL, (error, response, html) => {
//     if (error) {
//       return;
//     }
//     let $ = cheerio.load(html);
//     const vidIds = [];
//     $("div .yt-lockup").each(function (index, elem) {
//       vidIds[index] = elem.attribs["data-context-item-id"];
//     });
//     vidId = vidIds[0];
//     cb(vidId, title, artist);
//   });
// }

async function getSearchResult(search) {
  try {
    const { searchTerm, title, artist } = search;

    const formattedSearchTerm = searchTerm.replace(/ /g, "+");
    const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

    const response = await axios.get(requestURL);
    const html = response.data;

    const $ = cheerio.load(html);
    const vidIds = [];
    $("div .yt-lockup").each(function (index, elem) {
      vidIds[index] = elem.attribs["data-context-item-id"];
    });
    vidId = vidIds[0];

    return { vidId, title, artist };
  } catch (e) {
    console.log(e);
  }
}

async function getSearchVids(searchTerm) {
  try {
    const formattedSearchTerm = searchTerm.replace(/ /g, "+");
    const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

    const response = await axios.get(requestURL);
    const html = response.data;

    const $ = cheerio.load(html);
    const vidIds = [];
    const vidTitles = [];
    const vids = [];
    $("div .yt-lockup").each(function (index, elem) {
      vidIds[index] = elem.attribs["data-context-item-id"];
    });
    $("a").each(function (index, elem) {
      // console.log(elem);
      if (
        elem.attribs.class ===
        "yt-uix-tile-link yt-ui-ellipsis yt-ui-ellipsis-2 yt-uix-sessionlink      spf-link "
      ) {
        vidTitles.push(elem.attribs.title);
      }
    });
    for (i = 0; i < vidIds.length; i++) {
      if (vidIds[i] && vidTitles[i]) {
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
