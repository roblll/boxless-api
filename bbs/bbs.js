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

    const chartItems = $(".o-chart-results-list-row-container");
    for (let i = 0; i < chartItems.length; i += 1) {
      const infoContainer = chartItems[i].children[1];
      const titleAndArtistContainer =
        infoContainer.children[7].children[1].children[1];
      const posInfo = infoContainer.children[7].children[1];

      chart.songs.push({
        rank: parseInt(
          infoContainer.children[1].children[1].children[0].data.trim(),
          10
        ),
        title: titleAndArtistContainer.children[1].children[0].data.trim(),
        artist: titleAndArtistContainer.children[3].children[0].data.trim(),
      });
    }

    if (chart.songs.length > 0) {
      return chart.songs;
    } else {
      return {};
    }
  } catch (e) {
    // console.log("BBS ERROR!!!");
    // console.log(e);
    // return "There was an error in bbs";
    console.log("bbs error");
    console.log(e);
    // return e;
    // console.log(e.message);
    throw e;
  }
}

module.exports = {
  getChart,
};
