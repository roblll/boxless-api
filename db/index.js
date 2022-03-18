const { Client } = require("pg");

const clientOptions = {
  connectionString:
    process.env.DATABASE_URL || "postgresql://localhost/boxless",
};
if (process.env.DATABASE_URL) {
  clientOptions["ssl"] = {
    rejectUnauthorized: false,
  };
}

const client = new Client(clientOptions);

client.connect();

module.exports = client;
