const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
const db = require("./db");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const users = {
  [process.env.USER]: process.env.PASSWORD,
};
const SECRET = process.env.SECRET;

const {
  getSearchResult,
  getSearchVids,
  getTitle,
  getTitleAndLength,
} = require("./yts/yts");
const { getChart } = require("./bbs/bbs");
const { getRVid } = require("./rs/rs");

const {
  getRandDate,
  getChartsSelected,
  getSongSearch,
  getPickSongs,
  getWeek,
  getGenre,
} = require("./utils/utils");

app.use(express.static(path.join(__dirname, "build")));

function ensureLoggedIn(req, res, next) {
  try {
    const authHeaderValue = req.headers.authorization;
    const token = jwt.verify(authHeaderValue, SECRET);
    return next();
  } catch (e) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

app.get("/api/test", async (req, res) => {
  return res.json({ test: "test" });
});

app.get("/api/vid", ensureLoggedIn, async (req, res) => {
  try {
    const date = getRandDate(req.query);
    const week = getWeek(date);
    const chartName = getChartsSelected(req.query);

    let chart = null;

    const genre = getGenre(chartName);

    if (genre === "hiphop" || genre === "house" || genre === "trance") {
      const {
        vidId,
        hiphopAfter,
        hiphopCount,
        houseAfter,
        houseCount,
        tranceAfter,
        tranceCount,
      } = await getRVid(
        genre,
        req.query.hiphopAfter,
        req.query.hiphopCount,
        req.query.houseAfter,
        req.query.houseCount,
        req.query.tranceAfter,
        req.query.tranceCount
      );
      const { title } = await getTitle(vidId);
      return res.json({
        vidId,
        title,
        hiphopAfter,
        hiphopCount,
        houseAfter,
        houseCount,
        tranceAfter,
        tranceCount,
        genre,
      });
    } else {
      const results = await db.query(`SELECT * FROM ${genre} WHERE week=$1`, [
        week,
      ]);

      if (results.rows.length > 0) {
        chart = results.rows[0].data;
      } else {
        chart = await getChart(chartName, week);
        if (chart.length > 0) {
          const chartJSON = JSON.stringify(chart);
          const test = await db.query(
            `INSERT INTO ${genre}(week, data) VALUES ($1, $2)`,
            [week, chartJSON]
          );
          console.log(test);
        }
      }

      const songSearch = getSongSearch(chart, req.query);

      const vid = await getSearchResult(songSearch);

      if (vid) {
        const { vidId, vidLength, title, artist } = vid;
        return res.json({ vidId, vidLength, title, artist });
      } else {
        return res.json({});
      }
    }
  } catch (e) {
    return res.json({ error: e });
  }
});

app.get("/api/searchvids", ensureLoggedIn, async (req, res) => {
  try {
    const searchTerm = req.query.search.replace(/%/g, " ");
    const searchResults = await getSearchVids(searchTerm);
    return res.json({ searchResults });
  } catch (e) {
    return res.json({ error: e });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { initials, phone } = req.body;
    if (users[initials] === phone) {
      const token = jwt.sign({ name: initials }, SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      return res.json({ token });
    } else {
      return res.json({});
    }
  } catch (e) {
    return res.json(e);
  }
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
