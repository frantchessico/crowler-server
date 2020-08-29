const { Router } = require('express');
const jwt = require('jsonwebtoken')
const UserController = require('../controller/UserController');
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


module.exports = router;