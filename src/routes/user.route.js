const express = require('express');
const { userRegistration } = require('../controllers/users/user-registration.handler.js');
const { userLogin } = require('../controllers/users/user-login.handler.js');
const { logoutUser } = require('../controllers/users/logout-user.handler.js');
const { authorization } = require('../middlewares/auth.js');
const { validator } = require('../middlewares/validator.js');
const { userRegistrationInput } = require('../controllers/users/validators/registration-input.validator.js');
const { userLoginInput } = require('../controllers/users/validators/user-login-input.validator.js');

const router = express.Router();

router.post('/register', validator(userRegistrationInput), userRegistration);
router.post('/login', validator(userLoginInput), userLogin);
router.post('/logout', authorization, logoutUser);

module.exports = router;