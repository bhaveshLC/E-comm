const express = require('express');
const { addUser, getAllProducts, Login, sendEmail, Otpverify, ChangePassword } = require('../controllers/user');
const bodyParser = require("body-parser"); 

const router = express.Router();
router.use(bodyParser.json());

router.post("/signup",addUser)
router.post('/login',Login)
router.get('/products',getAllProducts)
router.post('/forgot_password', sendEmail);
router.post('/otp_verification',Otpverify);
router.post('/change_password',ChangePassword);
module.exports = router;