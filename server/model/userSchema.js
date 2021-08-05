const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
const userSchema = new Schema({

    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,

    },
    userType:
    {
        type: String,
        default: "employee"
    }

},
    {
        timestamps: true
    }
)

userSchema.plugin(uniqueValidator);
module.exports= mongoose.model('User', userSchema)
