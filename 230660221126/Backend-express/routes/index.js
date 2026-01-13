//import express
const express = require('express')

//init express router
const router = express.Router();

//import verifyToken
const verifyToken = require('../middlewares/auth');

//import register controller
const registerController = require('../controllers/RegisterController');

//import login controller
const loginController = require('../controllers/LoginConroller');

//import user controller
const userController = require('../controllers/UserController');

//import validate register and login
const { validateRegister, validateLogin } = require('../utils/validators/auth');

//define route for register
router.post('/register', validateRegister, registerController.register);

//define route for login
router.post('/login', validateLogin, loginController.login);

//define route for user
router.get('/admin/users', verifyToken, userController.findUsers);

//export router
module.exports = router