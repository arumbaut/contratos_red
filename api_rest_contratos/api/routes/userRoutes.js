var express = require('express');
var router = express.Router();
const {verificarAuth} = require('../middlewares/autenticacion');
var controller = require('../controllers/userController');

router.get('/', verificarAuth ,controller.list);
router.post('/', controller.create);
router.get('/:id', controller.user);
router.put('/:id', controller.edit);
router.post('/:id', controller.delete);

module.exports = router;
