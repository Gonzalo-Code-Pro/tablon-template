const { Pool } = require("pg");

//coneccion
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "159753",
  database: "tablon",
  port: "5432",
});

module.exports = pool;
