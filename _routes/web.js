// import express
let express  = require('express');
let router   = express.Router();
let external = require('../_controllers/external-controller');
let internal = require('../_controllers/internal-controller'); // Authentication 

// un-aunthenticated uri
router.get('/', external.index);
router.get('/documentations', external.documentation);

// aunthenticated uri
// router.get('/dashboard', internal.dashboard); // user dashboard
// router.get('/profile',   internal.profile); // user profile
// router.get('/setting',   internal.setting); // user setting

module.exports = router;