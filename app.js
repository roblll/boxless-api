const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  return res.json("Boxless");
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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
