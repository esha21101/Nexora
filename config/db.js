const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nexora",
  password: "1234", // use your password
  port: 5432,
});

module.exports = pool;