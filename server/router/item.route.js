const express=require("express");
const itemController=require("../controller/itemApi");

//create router
const router=express.Router();
router.post(`/additem`,itemController.addItem);
router.get(`/getAllItem`,itemController.getAllItem);
// router.put(`/updateProduct/:id`,productController.updateProduct);
// router.delete(`/deleteProduct/:id`,productController.deleteProduct);

module.exports=router;