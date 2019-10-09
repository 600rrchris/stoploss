const express = require('express');
const router = express.Router();
const stockCtrl = require('../controllers/stocks')
/*---------- Public Routes ----------*/
router.post('/all', stockCtrl.getAllStocks)
router.post('/create', stockCtrl.createStock)
router.post('/deleteStock', stockCtrl.deleteStock)

/*---------- Protected Routes ----------*/




module.exports = router;
