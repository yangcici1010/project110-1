const db = require('../../utils/database');

const Category_81 = class Category_81 {
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
            let results = await db.query(`SELECT * from category_xx`);
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }

    static async fetchCatIdByName(name) {
        console.log('name', name);
        try {
            let results = await db.query(`SELECT * from category_xx WHERE name = $1;`, [name]);
            return results.rows[0].id;
        } catch (err) {
            console.log(err);
        }
    }

};

module.exports = Category_81;