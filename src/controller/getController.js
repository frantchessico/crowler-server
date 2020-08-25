const DatasDetails = require('../models/Test');

module.exports = {
    async getDataDetails(req, res) {
          const result = await  DatasDetails.find();

         return res.json(result)
    }
}