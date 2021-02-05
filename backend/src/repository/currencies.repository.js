const Currency = require('../models/currency');

/**
 * Currency repository
 */
module.exports = {
    /**
     * findAllCurrencies()
     * 
     * Find all currencies
     */
    findAllCurrencies: async () => {
        return await Currency.findAll();
    },

    /**
     * existsCurrency()
     * 
     * Returns if exists a currency id in de database
     */
    existsCurrency: async (id_currency) => {
        const currency = await Currency.findByPk(id_currency);
        return currency !== null;
    }
}