const getRandDate = (query) => {
  const { dateMin, dateMax } = query;
  let d1 = new Date(dateMin || "08-04-1958").getTime();
  let d2 = new Date(dateMax || new Date().toLocaleDateString()).getTime();
  return formatDate(new Date(getRandNum(d1, d2)));
};

const getRandNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const formatDate = (date) => {
  let month = `${date.getMonth() + 1}`;
  let day = `${date.getDate()}`;
  const year = `${date.getFullYear()}`;
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
};

const getChartsSelected = (query) => {
  const {
    pop,
    rap,
    latin,
    alternative,
    electronic,
    country,
    randb,
    rock,
    dance,
    hiphop,
    house,
    trance,
  } = query;
  const chartsSelected = {
    "hot-100": pop === "true",
    "rap-song": rap === "true",
    "latin-songs": latin === "true",
    "hot-alternative-songs": alternative === "true",
    "dance-electronic-songs": electronic === "true",
    "country-songs": country === "true",
    "r-and-b-songs": randb === "true",
    "rock-songs": rock === "true",
    "hot-dance-airplay": dance === "true",
    hiphop: hiphop === "true",
    house: house === "true",
    trance: trance === "true",
  };
  let charts = [];
  for (const genre in chartsSelected) {
    if (chartsSelected[genre]) {
      charts.push(genre);
    }
  }
  const chart = charts[getRandNum(0, charts.length - 1)];
  return chart;
};

const getSongSearch = (chart, query) => {
  const { rankMin, rankMax, mode, clean } = query;
  const rank = getRank(rankMin, rankMax, chart);
  let options = "";
  if (clean === "true") {
    options += " clean";
  }
  if (mode === "audio") {
    options += " hq audio";
  } else if (mode === "video") {
    options += " music video";
  } else if (mode === "lyrics") {
    options += " lyrics";
  }
  const title = chart[rank - 1].title;
  const artist = chart[rank - 1].artist;
  const searchTerm = `${title} ${artist} ${options}`;
  return {
    searchTerm,
    title,
    artist,
  };
};

const getRank = (rankMin, rankMax, chart) => {
  const chartMax = chart.length;
  rankMin = Number(rankMin);
  rankMax = Number(rankMax);
  if (chartMax < rankMax) rankMax = chartMax;
  if (rankMin > chartMax) rankMin = chartMax;
  return getRandNum(rankMin, rankMax);
};

const getPickSongs = (chart, query) => {
  const { rankMin, rankMax, lyrics, clean, karaoke } = query;
  const rank1 = getRank(rankMin, rankMax, chart);
  const rank2 = getRank(rankMin, rankMax, chart);
  let options = "";
  if (lyrics === "true") options += " lyrics";
  if (clean === "true") options += " clean";
  if (karaoke === "true") options += " karaoke";
  const title1 = chart[rank1].title;
  const artist1 = chart[rank1].artist;
  const searchTerm1 = `${title1} ${artist1} ${options}`;
  const title2 = chart[rank2].title;
  const artist2 = chart[rank2].artist;
  const searchTerm2 = `${title2} ${artist2} ${options}`;
  return {
    searchTerm1,
    title1,
    artist1,
    searchTerm2,
    title2,
    artist2,
  };
};

const getWeek = (date) => {
  const d = new Date(`${date}T03:24:00`);
  var theDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  var prevSunday = new Date(
    theDate.setDate(theDate.getDate() - theDate.getDay())
  );
  return formatDate(prevSunday);
};

const getGenre = (chart) => {
  const conversion = {
    "hot-100": "pop",
    "rap-song": "rap",
    "latin-songs": "latin",
    "hot-alternative-songs": "alternative",
    "dance-electronic-songs": "electronic",
    "country-songs": "country",
    "r-and-b-songs": "randb",
    "rock-songs": "rock",
    "hot-dance-airplay": "dance",
    hiphop: "hiphop",
    house: "house",
    trance: "trance",
  };
  return conversion[chart];
};

const getUrlParams = (url) => {
  if (!url) url = location.search;
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function (part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
};

module.exports = {
  getRandDate,
  getChartsSelected,
  getSongSearch,
  getPickSongs,
  getWeek,
  getGenre,
  getRandNum,
  getUrlParams,
};
