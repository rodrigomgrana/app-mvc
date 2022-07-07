const express = require('express');
const userController = require('../controllers/userControllers');


const router = express.Router();

router.get('/users', userController.allUsers);
router.get('/user/:id', userController.getUserId);

router.get('/search',userController.search);
module.exports = router;

