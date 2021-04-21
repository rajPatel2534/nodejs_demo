var express = require('express');
var verifyAuth = require('../middlewares/authenticate_verification');
var demoController = require('../controllers/demo_controller');

var router = express.Router();

router.get('/get_path' , verifyAuth, demoController.getData)

router.get('/' , verifyAuth, demoController.getData)

//Demo route without middleware
router.post('/demo_path', demoController.getData);

// Demo route with middleware
router.post('/demo_path_authenticated', verifyAuth, demoController.getData);

module.exports = router;
