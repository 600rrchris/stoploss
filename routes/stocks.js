const express = require('express');
const router = express.Router();
const stockCtrl = require('../controllers/stocks')
/*---------- Public Routes ----------*/
router.post('/create', stockCtrl.createStock)
router.post('/deleteStock', stockCtrl.deleteStock)
router.post('/all', stockCtrl.getAllStocks)

/*---------- Protected Routes ----------*/




module.exports = router;
