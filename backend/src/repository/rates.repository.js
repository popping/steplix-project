const {findAllCurrencies} = require('../repository/currencies.repository');
const Rate = require('../models/rate');
const Currency = require('../models/currency');

/**
 * Rates repository
 */
module.exports = {
    /**
     * getLastRates()
     * 
     * Returns the last values of every currency
     */
    getLastRates: async () => {
        const currencies = await findAllCurrencies();
        const rates = [];

        for(const key in currencies) {
            const currency = currencies[key];
            const rate =  await Rate.findOne({
                where: {
                    id_currency: currency.id
                },
                limit: 1,
                order: [
                    ['created_at', 'DESC']
                ],
                include: Currency
            })

            if(rate) {
                rates.push(rate.toJSON());            
            }
        }

        return rates;
    },

    /**
     * getRateBySymbol()
     * 
     * Gets the last cotization of a currency
     */
    async getRateBySymbol(symbol) {
        const rate =  await Rate.findOne({
            limit: 1,
            order: [
                ['created_at', 'DESC']
            ], 
            include: [{
                model: Currency,
                where: {
                    symbol: symbol
                }
            }]
        })

        return rate ? rate.toJSON(): null;
    }
}