const Category_81 = require('../models/crown_81/Category_81');
const Shop_81 = require('../models/crown_81/Shop_81');

exports.getCategory = async (req, res) => {
  try {
    return await Category_81.fetchAll();
  } catch (err) {
    console.log('getCategory error', error);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_81.fetchAll();
  } catch (err) {
    console.log('getCategory error', error);
  }
};

exports.getProductsByCategory = async (category) => {
  console.log('service', category);
  try {
    const cid = await Category_81.fetchCatIdByName(category);
    return await Shop_81.fetchByCatId(cid);
  } catch (err) {
    console.log('getCategory error', error);
  }
};
