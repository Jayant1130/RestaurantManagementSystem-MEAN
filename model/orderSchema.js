const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    _id : "",
    orderBy : {
        name : String, 
        contact : String
    },

    orderDetails : [{
        item : {
            type : mongoose.Types.ObjectId, 
            ref : "Item"
        },
        quantity : Number
    }]

}, {
    timestamps : true
})


.populate({
    path : "orderDetails", 
    populate : {
        path : "item",
        model : "Item"
    }
})
