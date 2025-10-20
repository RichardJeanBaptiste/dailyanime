const { Pool } = require('pg');

require('dotenv').config();

let data = await supabase
  .from('quotes')
  .select('*')

console.log(data.data);

const pass = process.env.psql_pass

const pool = new Pool({
  host: 'db.dlpjlifzvmswkoxkdkvg.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: pass
})

module.exports = {
  query: (text, params) => pool.query(text, params),
};

/**
 * 
 * pg_dump --clean -d your_original_db > daily_anime_clean.sql
 * 
 * createdb -h new_host -U new_username daily_anime
 * 
 * 
 * Restore into existing database
 * psql -U <username> -d <database_name> -f <dump_file>.sql
 */