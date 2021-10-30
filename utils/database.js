const { Pool } = require('pg');


const isProduction = process.env.NODE_ENV === "production"

const pool = new Pool({
  user: 'qildyshmobbuhu',
  host: 'ec2-52-206-193-199.compute-1.amazonaws.com',
  database: 'df27kfaejrb385',
  password: '8ba355bb331748cccf9629f5828a7add533e01dbaa08f44078736e9dbf297398',
  port: 5432,
 
  connectionString: isProduction ? process.env.DATABASE_URL : postgresql://postgres:0000@localhost:5432/crown_06
});

pool.query('SELECT * from category_06', (err, res) => {
  console.log(JSON.stringify(res.rows));
  pool.end();
});

module.exports = pool;