const cheerio = require("cheerio");
const axios = require("axios");

const BILLBOARD_BASE_URL = "http://www.billboard.com";
const BILLBOARD_CHARTS_URL = `${BILLBOARD_BASE_URL}/charts/`;

function getTitleFromChartItem(chartItem, $) {
  let title;
  try {
    title =
      $(".chart-element__information__song", chartItem).text() ||
      $(".chart-list-item__title-text", chartItem).text();
  } catch (e) {
    title = "";
  }
  return title.trim();
}

function getArtistFromChartItem(chartItem, $) {
  let artist;
  try {
    artist =
      $(".chart-element__information__artist", chartItem).text() ||
      $(".chart-list-item__artist", chartItem).text();
  } catch (e) {
    artist = "";
  }
  return artist.trim();
}

async function getChart(name, date) {
  try {
    let chartName = name;
    let chartDate = date;

    const chart = {};
    chart.songs = [];

    const requestURL = `${BILLBOARD_CHARTS_URL}${chartName}/${chartDate}`;

    const response = await axios.get(requestURL);
    const html = response.data;

    const $ = cheerio.load(html);

    let chartListItems;
    try {
      chartListItems = JSON.parse($("#charts").attr("data-charts"));
    } catch (err) {
      chartListItems = $(".chart-list__element");
    }
    if (!(chartListItems && chartListItems.length)) {
      chartListItems = $(".chart-list-item__first-row");
    }

    for (let i = 0; i < chartListItems.length; i += 1) {
      chart.songs.push({
        title:
          chartListItems[i].title ||
          getTitleFromChartItem(chartListItems[i], $),
        artist:
          chartListItems[i].artist_name ||
          getArtistFromChartItem(chartListItems[i], $),
      });
    }

    if (chart.songs.length > 0) {
      return chart.songs;
    } else {
      return {};
    }
  } catch (e) {
    console.log("BBS ERROR!!!");
    return "There was an error in bbs";
  }
}

module.exports = {
  getChart,
};
