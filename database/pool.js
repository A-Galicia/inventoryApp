const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'alfredo',
  database: 'inventory',
  password: 'Chicken2@',
  port: 5432,
});
