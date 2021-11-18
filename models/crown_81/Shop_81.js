const db = require('../../utils/database');
const Category_81 = require('./Category_81');

const Shop_81 = class Shop_81 {
    constructor(id, name, cat_id, price, remote_url, local_url) {
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * from shop_xx`);
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }

    static async fetchByCatId(id) {
        const query = {
            text: `SELECT * from shop_xx WHERE cat_id = $1;`,
            values: [id]
        }
        console.log('cat_id', id);
        try {
            let results = await db.query(query);
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }
};

module.exports = Shop_81;