const express=require("express");
const itemController=require("../controller/itemApi");

//create router
const router=express.Router();
router.post('/addItem',itemController.addItem);
router.get(`/getAllItem`,itemController.getAllItem);
router.put(`/updateItem/:id`,itemController.updateItem);
router.delete(`/deleteitem/:id`,itemController.deleteItem);

module.exports=router;