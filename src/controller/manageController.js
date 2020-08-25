
 const DatasDetails = require('../models/Datas');


 module.exports = {
     async deleteData(req, res) {
         const id = req.paras;

          DatasDetails.findByIdAndDelete(id)
         .then(() => {
             return res.json({successMessage: 'successfully'})
         }).catch(err => {
             return res.json(err)
         })
     }
 }


