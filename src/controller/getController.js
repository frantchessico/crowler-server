const DatasDetails = require('../models/Test');
const firebase = require('../utils/firebase')

module.exports = {
    async getDataDetails(req, res) {
         const result = await  DatasDetails.find();
      
         return res.json(result)
    }
}