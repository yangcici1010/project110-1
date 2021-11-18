const db = require('../../utils/database');
const oil_cate = require('./oil_cate');

const oil = class oil {
  constructor(oil_id, name, cate_id, price, remote_url, local_url) {
    this.oil_id = oil_id;
    this.name = name;
    this.cate_id = cate_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from oil`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchByCatId(cate_id) {
    const query = {
      text: `SELECT * from oil WHERE cate_id = $1;`,
      values: [cate_id],
    };
    console.log('cate_id', cate_id);
    try {
      let results = await db.query(query);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
};

module.exports = oil;
