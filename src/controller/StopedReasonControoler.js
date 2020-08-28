const DatasDetails = require('../models/Datas');
const Test = require('../models/Test')
const firebase = require('../utils/firebase')

const CONSTANTS = require('../constants/constOleo');


module.exports = {
    async store(req, res) {
       const { 
          c2h2, 
          c2h4, 
          ch4, 
          c2h6,
           h2
      } = req.body;
           if(!c2h2 || !c2h4 || !ch4 || !h2 ) {
            return res.json({error: 'please enter valid value'}); 
           }  

       const newDatas = new DatasDetails({c2h2, c2h4, ch4, c2h6, h2});

        await newDatas.save().then( async (data) => {
         if((c2h2/c2h4) <= 0.1) {
            
             
             const value =  (ch4 / h2);
             console.log(value)
             if(value >= CONSTANTS.valueFixFirst && value <= CONSTANTS.valueFixThree) {
               console.log(value)
                 if((c2h4/c2h6) < 3.5) {
                   
                     const test =  new Test({
                        idOfDataForTest: data.id,
                        c2h2Byc2h4: c2h2/c2h4,
                        ch4Byh2: ch4 / h2,
                        c2h4Byc2h6: c2h4/ c2h6,
                        resulOfTest: 'normalState'
                     });
                    const testReuslt = await test.save();
                    return res.json(testReuslt)
                 } else if( (c2h4/c2h6) > 3.5) {
                    const test =  new Test({
                        idOfDataForTest: data.id,
                        c2h2Byc2h4: c2h2/c2h4,
                        ch4Byh2: ch4 / h2,
                        c2h4Byc2h6: c2h4/ c2h6,
                        resulOfTest: 'Sobreaquecimento, a temperatura está acima de 700C'
                     });
                    const testReuslt = await test.save();
                    return res.json(testReuslt)
                 }
             }

             else {
                console.log('Passando')
               if((ch4/h2) < 0.1) {
                  console.log('Verificado')
                       if((c2h4/c2h6) <= 0.1) {
                        const test =  new Test({
                           idOfDataForTest: data.id,
                           c2h2Byc2h4: c2h2/c2h4,
                           ch4Byh2: ch4 / h2,
                           c2h4Byc2h6: c2h4/ c2h6,
                           resulOfTest: 'Descargas parciais'
                        });
                       const testReuslt = await test.save();
                       firebase.FIRESTORE.collection('results').add({
                          test: 'Oi'
                       })
                       return res.json(testReuslt)
                       } else {
                        return res.json({fine: true})
                       }
               } else {
                  if(null) {
                           return null;
                  }
               }
             }
         } else  {
            const value = c2h2 / c2h4;
            if(value >= CONSTANTS.valueFixFirst && value <= CONSTANTS.valueFixFour) 
            {
               const value = ch4 / h2;
               if(value >= CONSTANTS.valueFixFirst && value <= CONSTANTS.valueFixThree) {
                  const value = c2h4 / c2h6;
                  console.log(value)
                  if(value >= CONSTANTS.valueFixFour) {
                     const test =  new Test({
                        idOfDataForTest: data.id,
                        c2h2Byc2h4: c2h2/c2h4,
                        ch4Byh2: ch4 / h2,
                        c2h4Byc2h6: c2h4/ c2h6,
                        resulOfTest: 'Grande Descarga De Energia'
                     });
                    const testReuslt = await test.save();
                    return res.json(testReuslt)
                  } else {
                     const test =  new Test({
                        idOfDataForTest: data.id,
                        c2h2Byc2h4: c2h2/c2h4,
                        ch4Byh2: ch4 / h2,
                        c2h4Byc2h6: c2h4/ c2h6,
                        resulOfTest: 'Sem falha, continue verificando'
                     }); 

                    const testReuslt = await test.save();
                   await firebase.FIRESTORE.collection('results').add({
                     idOfDataForTest: data.id,
                     c2h2Byc2h4: c2h2/c2h4,
                     ch4Byh2: ch4 / h2,
                     c2h4Byc2h6: c2h4/ c2h6,
                     resulOfTest: 'Sem falha, continue verificando'
                   })
                    return res.json(testReuslt)
                  }
                  
                 
               }
            } else {
               return res.json({ok: false})
            }
            
         }
           
       })

       
    }
}