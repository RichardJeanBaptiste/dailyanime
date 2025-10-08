const { Pool } = require('pg');

require('dotenv').config();

const pass = process.env.psql_pass

const pool = new Pool({
  user: 'rich',
  host: 'localhost',
  database: 'daily_anime',
  password: pass,
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

/**
 * pg_dump -h localhost -U rich -d daily_anime > daily_anime_dump.sql
 * 
 * createdb -h new_host -U new_username daily_anime
 * 
 * psql -h richx -U rich -d daily_anime < daily_anime_dump.sql
 */