const pg = require('pg');
// dotenv is for loading environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgresql://dbuser:dbpassword@localhost:5432/db_name';
const databaseConfig = { connectionString: connectionString};
const pool = new pg.Pool(databaseConfig);

module.exports = pool;