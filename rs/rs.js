const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

const REDDIT_BASE_URL = "http://www.reddit.com";

async function getRSong(search) {
  try {
    return { test: "test" };
  } catch (e) {
    return undefined;
  }
}

module.exports = {
  getRSong,
};
