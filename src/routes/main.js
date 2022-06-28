const express = require('express');
const mainController = require('../controllers/mainControllers');
const router = express.Router();

router.get('/', mainController.index);

router.get('/contact', mainController.contact);

router.get('/about',mainController.about);

/*sugestion box*/

module.exports = router;