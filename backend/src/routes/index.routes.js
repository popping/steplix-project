const { Router } = require('express');
const router = Router();

/**
 * Import controllers
 */
const {getCurrencies} = require('../controllers/currencies.controller');
const {getRates, postRate, getRate} = require('../controllers/rates.controller');

/**
 * Routes
 */
router.get('/currencies', getCurrencies);
router.get('/rates', getRates);
router.post('/rates', postRate);
router.get('/rates/:symbol', getRate);

module.exports = router;