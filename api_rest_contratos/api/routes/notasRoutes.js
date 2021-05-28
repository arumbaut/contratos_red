var express = require('express');
var router = express.Router();
var controller = require('../controllers/notasController');

router.get('/', controller.list);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.put('/:id',controller.edit)
router.get('/:id', controller.nota);

module.exports = router;
