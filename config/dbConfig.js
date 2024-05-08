import { Pool } from "pg";
import "dotenv/config";

const { DB_PASSWORD, DB_USER, DB_DATABASE, DB_HOST } = process.env;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export default pool;
