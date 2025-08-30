const { Pool } = require('pg');

const pool = new Pool({
  user: 'rich',
  host: 'localhost',
  database: 'daily_anime',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

/**
 * pg_dump -h localhost -U your_username -d daily_anime > daily_anime_dump.sql
 * 
 * createdb -h new_host -U new_username daily_anime
 * 
 * psql -h new_host -U new_username -d daily_anime < daily_anime_dump.sql
 */