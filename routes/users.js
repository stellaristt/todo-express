const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authorize } = require('../middleware/auth');

router.post('/', authorize, userController.createUser);

router.get('/', authorize, userController.getAllUsers);

router.get('/:username', authorize, userController.getUserByUsername);

router.put('/:username', authorize, userController.updateUser);

router.delete('/:username', authorize, userController.deleteUser);

module.exports = router;
