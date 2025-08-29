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