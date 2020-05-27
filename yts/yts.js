const request = require("request");
const cheerio = require("cheerio");

const YOUTUBE_BASE_URL = "http://www.youtube.com";
const YOUTUBE_SEARCH_URL = `${YOUTUBE_BASE_URL}/results?search_query=`;

function getSearchResult(search, cb) {
  const { searchTerm, title, artist } = search;

  const formattedSearchTerm = searchTerm.replace(/ /g, "+");
  const requestURL = `${YOUTUBE_SEARCH_URL}${formattedSearchTerm}`;

  request(requestURL, (error, response, html) => {
    if (error) {
      return;
    }
    let $ = cheerio.load(html);
    const vidIds = [];
    $("div .yt-lockup").each(function (index, elem) {
      vidIds[index] = elem.attribs["data-context-item-id"];
    });
    vidId = vidIds[0];
    cb(vidId, title, artist);
  });
}

module.exports = {
  getSearchResult,
};
