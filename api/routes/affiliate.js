const express = require('express');
const router = express.Router();
require("../controllers/affiliateController")

router.route('/').get(getAllAffiliate);
router.route('/affiliate/:id').get(getAffiliateById);


module.exports = router;