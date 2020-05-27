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
  } = query;
  const chartsSelected = {
    "hot-100": pop === "true",
    "rap-song": rap === "true",
    "latin-songs": latin === "true",
    "alternative-songs": alternative === "true",
    "dance-electronic-songs": electronic === "true",
    "country-songs": country === "true",
    "r-b-hip-hop-songs": randb === "true",
    "rock-songs": rock === "true",
    "dance-club-play-songs": dance === "true",
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
  const { rankMin, rankMax, lyrics, clean, karaoke } = query;
  const rank = getRank(rankMin, rankMax, chart);
  let options = "";
  if (lyrics === "true") options += " lyrics";
  if (clean === "true") options += " clean";
  if (karaoke === "true") options += " karaoke";
  const searchTerm = `${chart.songs[rank].title} ${chart.songs[rank].artist} ${options}`;
  return {
    searchTerm,
    title: `${chart.songs[rank].title}`,
    artist: `${chart.songs[rank].artist}`,
  };
};

const getRank = (rankMin, rankMax, chart) => {
  const chartMax = chart.songs.length;
  rankMin = Number(rankMin);
  rankMax = Number(rankMax);
  if (chartMax < rankMax) rankMax = chartMax;
  if (rankMin > chartMax) rankMin = chartMax;
  return getRandNum(rankMin, rankMax);
};

module.exports = {
  getRandDate,
  getChartsSelected,
  getSongSearch,
};
