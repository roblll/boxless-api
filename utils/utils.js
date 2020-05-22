const getRandDate = (req) => {
  const { dateMin, dateMax } = req;
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

module.exports = {
  getRandDate,
};
