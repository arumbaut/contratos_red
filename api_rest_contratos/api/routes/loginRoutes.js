const express = require('express');
const router = express.Router();
let controller = require('../controllers/loginController')


router.get('/', controller.list)
router.post('/',controller.login)
module.exports = router;