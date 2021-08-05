const express = require ("express");
const userController = require ("../controller/loginApi");
const router = express.Router();


router.post("/signUp",userController.signUp);
router.post("/login",userController.login);

module.exports=router;
