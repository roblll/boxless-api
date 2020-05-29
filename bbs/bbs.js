const cheerio = require("cheerio");
const axios = require("axios");

const BILLBOARD_BASE_URL = "http://www.billboard.com";
const BILLBOARD_CHARTS_URL = `${BILLBOARD_BASE_URL}/charts/`;

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

    // console.log("chartListItems:");
    // console.log(chartListItems);

    if (chartListItems.length > 0) {
      return chartListItems;
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
