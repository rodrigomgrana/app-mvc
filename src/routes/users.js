const express = require('express');
const userController = require('../controllers/userControllers');


const router = express.Router();

router.get('/users', userController.allUsers);
router.get('/user/:id', userController.getUserId);
router.get('/search',userController.search);

router.post('/user',userController.postUser);
router.get('/edit/:id', userController.edit);
router.put('/edit', userController.editConfirm);
module.exports = router;

