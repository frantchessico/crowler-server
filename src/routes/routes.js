const { Router } = require('express');
const jwt = require('jsonwebtoken')
const UserController = require('../controller/UserController');
const Task = require('../models/Task');
const router = Router();
const ContactController = require('../controller/ContactController');
const StopedReasonControoler = require('../controller/StopedReasonControoler');
const DataController = require('../controller/getController')
const manageController = require('../controller/manageController');

router.post('/contact-us', ContactController.store);

router.post('/budget-required', StopedReasonControoler.store)
router.get('/data-av', DataController.getDataDetails)
router.post('/delete-av/:id', manageController.deleteData)


router.post('/sigin', UserController.login);

router.post('/create-task',  (req, res) => {
   
    const { title, description } = req.body;
    const newTask = new Task({
        title,
        description,
    });

    newTask.save().then(data => {
        console.log('success')
    }).catch(() => {
        console.log('Error')
    })

    return res.json(req.body);
})



 function verifyToken(req, res, next) {
    
     if(!req.headers.authorization) {
     return  res.status(401).send('Unthorize requeste')
   } 
   const token = req.headers.authorization.split(' ')[1];
   if(token === 'null') {
    return res.status(401).send('Unthorize requeste')
   }
   const payload = jwt.verify(token, 'secretKey');
   req.userId = payload._id;
   next();








    return res.json({ok: true})

    
}
module.exports = router;