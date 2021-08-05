const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const itemSchema = new Schema({

    itemName:
    {
        type: String,
        required: true,
        unique: true
    },
    description:
    {
        type: String,
        required: true,
        
    },
    itemPrice:
    {
        type: Number,
        required:true

    },
    image:
    {
        type:String,
        required:true
    }
    
},
    {
        timestamps: true
    }
)

itemSchema.plugin(uniqueValidator);
module.exports= mongoose.model('Item', itemSchema)
