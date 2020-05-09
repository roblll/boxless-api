const express = require("express");
const morgan = require("morgan");
const { getChart } = require("billboard-top-100");

const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");

app.use(morgan("tiny"));

const { getSearchResult } = require("./yts/yts");

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/vid", (req, res) => {
  const date = "2019-08-27";

  getChart("hot-100", date, (err, chart) => {
    if (err) {
      console.log(err);
      return res.json({ err });
    } else {
      if (chart.songs.length < 1) return res.json({ err });
      const title = chart.songs[0].title;
      const artist = chart.songs[0].artist;
      const ytsTest = getSearchResult(title, artist);
      return res.json({ title, ytsTest });
    }
  });
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    error: app.get("env") == "development" ? err : {},
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
