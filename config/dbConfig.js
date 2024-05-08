const { Pool } = require("pg");

const pool = new Pool({
  user:DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: 5432,
});

export default pool;
