const Rate = require('../models/rate');
const {existsCurrency} = require('../repository/currencies.repository');
const {getLastRates, getRateBySymbol} = require('../repository/rates.repository');

/**
 * Rates Controller
 */
module.exports = {
    /**
     * getRates()
     * 
     * @param req 
     * @param res 
     */
    getRates: async (req, res) => {
        const rates = await getLastRates()
        
        return res.json(rates);
    },

    /**
     * postRate()
     * 
     * @param req 
     * @param res 
     */
    postRate: async (req, res) => {
        const {id_currency, value} = req.body;

        try {
            if(await existsCurrency(id_currency)) {
                if(value) {
                    await Rate.create({
                        id_currency,
                        value,
                        created_at: Date.now()
                    });
                } else {
                    throw `Don't provide [value]`;
                }
            } else {
                throw `Don't exists the [id_currency=${id_currency}]`;
            }
    
            return res.json({
                message: 'Rate saved successful!'
            });
        } catch(err) {
            return res.json({
                message: 'There was an error to save the rate.',
                error: err
            });
        }
    },

    /**
     * getRate()
     * 
     * @param req 
     * @param res 
     */
    getRate: async (req, res) => {
        const {symbol} = req.params;
        const rate = await getRateBySymbol(symbol.toLocaleUpperCase())

        if(!rate) {
            return res.json({
                message: `Not rate for symbol ${symbol}`
            })
        }

        return res.json(rate);
    }
}