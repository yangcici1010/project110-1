const oil_cate = require('../models/midpj/oil_cate');
const oil = require('../models/midpj/oil');

exports.getCategory = async (req, res) => {
  try {
    return await oil_cate.fetchAll();
  } catch (err) {
    console.log('getCategory error', error);
  }
};

exports.getOil = async (req, res) => {
  try {
    return await oil.fetchAll();
  } catch (err) {
    console.log('getCategory error', error);
  }
};

exports.getProductsByCategory = async (category) => {
  console.log('service', category);
  try {
    const cid = await oil_cate.fetchCatIdByName(category);
    console.log('cid', cid);
    return await oil.fetchByCatId(cid);
  } catch (err) {
    console.log('getCategory error', error);
  }
};
