import { Sql } from "postgres";

const db = require('postgres');

let sql: Function;

async function postgres() {
  // const client = await db.connect();
  if (sql) return sql;

  sql = await db(`${process.env.POSTGRES_URL}`, {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE
  });

  return sql;
}

export default postgres;
