const {findAllCurrencies} = require('../repository/currencies.repository');

/**
 * Currencies controller
 */
module.exports = {
    /**
     * getCurrencies()
     * 
     * @param req 
     * @param res 
     */
    getCurrencies: async (req, res) => {
        const currencies = await findAllCurrencies();
        return res.json(currencies);
    }
 }