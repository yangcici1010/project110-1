const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === "production";

let pool;

if (isProduction) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    });    
} else {
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: '1101_db_81',
        password: '0000',
        port: 5432,
    });
}

// pool.query('SELECT * from category_06', (err, res) => {
//   console.log(JSON.stringify(res.rows));
//   pool.end();
// });

module.exports = pool;