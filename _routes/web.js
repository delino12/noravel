// import express
let express  = require('express');
let router   = express.Router();
let auth     = require('../_controllers/auth-controller');
let external = require('../_controllers/external-controller');
let internal = require('../_controllers/internal-controller'); // Authentication 

// un-aunthenticated uri
router.get('/', external.index);
router.get('/documentation', external.documentation);

// authentication process login
router.get('/login', auth.loginForm);
router.post('/login', auth.login);

// authentication process signup
router.get('/signup', auth.signupForm);
router.post('/signup', auth.signup);

// aunthenticated uri
// router.get('/dashboard', internal.dashboard); // user dashboard
// router.get('/profile',   internal.profile); // user profile
// router.get('/setting',   internal.setting); // user setting

module.exports = router;