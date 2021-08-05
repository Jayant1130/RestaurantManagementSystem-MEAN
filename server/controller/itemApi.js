const Item = require("../model/itemSchema");
const { request, response } = require('express');

const addItem = async (request, response) => {
    console.log("hello world")
    const { itemName, description, itemPrice, image } = request.body;
    console.log("body: ", request.body);
    try {
        const isExist = await Item.findOne({ itemName });
        if (isExist) {
            return response.status(400).json("food already exist");
        }
        const item = new Item({
            itemName,
            description,
            itemPrice,
            image
        });
        await item.save()
        console.log("item added successfully")
        response.status(201).json({ food });
    }catch (error) {
        console.log("error  ", error);
        return response.status(500).json("Something went wrong while adding Item")
    }
}
exports.addItem = addItem;

//Get All Item API
const getAllItem = async (request, response) => {
    try {
        const item = await Item.find()
        response.status(201).json(item);
    }
    catch (error) {
        console.log("error in getting item", error)
    }
}
exports.getAllItem = getAllItem;