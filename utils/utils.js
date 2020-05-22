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

module.exports = {
  getRandDate,
  getChartsSelected,
};
