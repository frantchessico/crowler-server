const DatasDetails = require('../models/Test');
const firebase = require('../utils/firebase')

module.exports = {
    async getDataDetails(req, res) {
        //   const result = await  DatasDetails.find();
      const datas =  firebase.FIRESTORE.collection('results')
     datas.get().then(snapshot => {
         snapshot.forEach(data => {
             const i =  data.data();
             
             return res.json(i)
         })
     }).catch(err => { 
         return res.json(err)
     })

         
    }
}