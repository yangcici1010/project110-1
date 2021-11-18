var express = require('express');
var router = express.Router();
const apiCrown2Controller_81 = require('../controllers/apiCrown2Controller_81');
const apiOilController_81 = require('../controllers/apiOilController_81');

/* crown_81 */
router.get('/category_81', apiCrown2Controller_81.getCategory);
router.get('/shop_81', apiCrown2Controller_81.getShop);
router.get('/shop_81/:category', apiCrown2Controller_81.getProductsByCategory);

/* midproj_81 */
router.get('/oil', apiOilController_81.getOil);
router.get('/oil/:category', apiOilController_81.getProductsByCategory);
/* finalproj_81 */

module.exports = router;
