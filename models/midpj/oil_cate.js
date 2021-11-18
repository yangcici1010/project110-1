const db = require('../../utils/database');

const oil_cate = class oil_cate {
  constructor(id, name, cate_id) {
    this.id = id;
    this.name = name;
    this.cate_id = cate_id;
  }

  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from oil_cate`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchCatIdByName(name) {
    console.log('name', name);
    try {
      let results = await db.query(`SELECT * from oil_cate WHERE name = $1;`, [
        name,
      ]);
      return results.rows[0].id;
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = oil_cate;
