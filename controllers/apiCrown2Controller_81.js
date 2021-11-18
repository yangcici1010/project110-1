const serviceCrown2Controller_81 = require('./serviceCrown2Controller_81');

exports.getCategory = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_81.getCategory();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_81.getShop();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
    const data = await serviceCrown2Controller_81.getProductsByCategory(
      req.params.category
    );
    console.log('getProductsByCategory', JSON.stringify(data));
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};
