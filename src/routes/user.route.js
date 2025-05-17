const express = require('express');
const { userRegistration } = require('../controllers/users/user-registration.handler.js');
const { userLogin } = require('../controllers/users/user-login.handler.js');

const router = express.Router();

router.post('/register', userRegistration);
router.post('/login', userLogin);

module.exports = router;