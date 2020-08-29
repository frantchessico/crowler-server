const DatasDetails = require('../models/Test');
const firebase = require('../utils/firebase')



// module.exports = {
//     async getDataDetails(req, res) {
//          const snapshot = firebase.FIRESTORE.collection('results').orderBy('createdAt', 'desc').get()
//          snapshot.then(data => {
//              let avas = [];
//              data.forEach(doc => {
//                  avas.push(doc.data())
//              })
//              return res.json(avas)
//          }).catch(err => {
//              return res.json(err)
//          })
//     }
// }


module.exports = {
    async getDataDetails(req, res) {
         const snapshot = firebase.DATABASE.ref('result').once('value')
         .then(data => {
            let avas = [];
            data.forEach(doc => {
                console.log(doc)
                avas.push(doc.val())
            })
            return res.json(avas)
         }).catch(err => {
             return res.json(err)
         })
         
    }
}