const serviceOilController_81 = require('./serviceOilController_81');

exports.getCategory = async (req, res) => {
  try {
    const data = await serviceOilController_81.getCategory();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.getOil = async (req, res) => {
  try {
    const data = await serviceOilController_81.getOil();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
    const data = await serviceOilController_81.getProductsByCategory(
      req.params.category
    );
    console.log('getProductsByCategory', JSON.stringify(data));
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
};
