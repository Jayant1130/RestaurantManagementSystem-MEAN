const User = require("../model/userSchema");
const { request, response } = require('express');

const login = async (request, response) => {
    const { email, password } = request.body;
    console.log("body :", request.body);

    try {
        console.log("hello");
        const user = await findByCredentials(email, password, response);
        console.log("user", user);
        response.status(200).json({ user });

    }
    catch (error) {
        console.log("error occured : ", error);
    }
}

const signUp = async (request, response) => {
    const { name, email, password } = request.body;
    console.log("body : ", request.body);
    try {
        const isExist = await User.findOne({ email });
        console.log("isExist", isExist)
        if (isExist) {
            return response.status(400).json("User ,already exist");
        }
        const user = new User(request.body);
        console.log("User : ", user)
        await user.save();
        response.status(201).json({ user});

    }
    catch (error) {
        console.log(error);
        return response.status(500).json("something went wrong...!!")
    }

}

const findByCredentials = async (email, password, response) => {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
        return response.status(404).json({ error: "invalid user" });
    }
    return user;
};

exports.signUp= signUp
exports.login= login;

