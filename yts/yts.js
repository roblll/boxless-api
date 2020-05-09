const request = require("request");
const cheerio = require("cheerio");

const YOUTUBE_BASE_URL = "http://www.youtube.com";
const YOUTUBE_SEARCH_URL = `${YOUTUBE_BASE_URL}/results?search_query=`;

function getSearchResult(title, artist) {
  const formattedSearchTerm = `${title.replace(/ /g, "+")}+${artist.replace(
    / /g,
    "+"
  )}`;
  const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

  request(requestURL, (error, response, html) => {
    if (error) {
      return;
    }
    const $ = cheerio.load(html);
    const vidIDs = [];
    $("div .yt-lockup").each(function (index, elem) {
      vidIDs[index] = elem.attribs["data-context-item-id"];
    });
    vidID = vidIDs[0];
    return { vidID };
  });
  return { title, artist };
}

module.exports = {
  getSearchResult,
};
