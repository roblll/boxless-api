const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getChart } = require("billboard-top-100");

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());

const { getSearchResult } = require("./yts/yts");

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/vid", (req, res) => {
  const date = "2019-04-10";

  getChart("hot-100", date, (err, chart) => {
    if (err) {
      console.log(err);
      return res.json({ err });
    } else {
      if (chart.songs.length < 1) return res.json({ err });
      const title = chart.songs[0].title;
      const artist = chart.songs[0].artist;
      getSearchResult(title, artist, (vidId, title, artist) => {
        return res.json({ vidId, title, artist });
      });
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
