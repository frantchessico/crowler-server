const DatasDetails = require('../models/Datas');

module.exports = {
    async getDataDetails(req, res) {
          const result = await  DatasDetails.find();

         return res.json(result)
    }
}