const { Client } = require("pg");
console.log("db", process.env.DATABASE_URL, "postgresql://localhost/boxless");
const client = new Client({
  connectionString:
    process.env.DATABASE_URL || "postgresql://localhost/boxless",
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

module.exports = client;
