const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');
const { authorize } = require('../middleware/auth');

router.get('/', authorize, listController.getListsByAuthenticatedUser);

router.get('/:id', authorize, listController.getListById);

router.post('/', authorize, listController.createList);

router.put('/:id', authorize, listController.updateList);

router.delete('/:id', authorize, listController.deleteList);

router.get('/:username', authorize, listController.getListByUser);

module.exports = router;
