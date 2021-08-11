const Item = require("../model/orderSchema");
const { request, response } = require('express');

const placeOrder = async (request, response) => {
    const body = request.body.orderDetails;
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
        response.status(201).json({ item });
    }catch (error) {
        console.log("error  ", error);
        return response.status(500).json("Something went wrong while adding Item")
    }
}

exports.addItem = addItem;

//get all items api

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

//update a product

const updateItem = async (request, response) => {
    const _id = request.params.id;
    const data = request.body;
    try {
        const item = await Item.findByIdAndUpdate(
            { _id },
            { $set: data },
            { new: true }
        )
        if (!item) {
            return response.status(404).json("item not found");
        }
        return response.status(200).json(item);
    } catch (error) {
        console.log(error, "error :")
    }
}

exports.updateItem = updateItem;

const deleteItem = async (request, response) => {
    const _id = request.params.id;
    try {
        const item = await Item.findByIdAndDelete({ _id });
        if (!item) {
            return response.status(404).json("Item does not exist ");
        }
        response.status(200).json(item);

    } catch (error) {
        console.log("error", error);
    }
}
exports.deleteItem = deleteItem;