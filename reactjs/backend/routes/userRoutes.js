const express  = require('express');
const router = express.Router()
const User = require('../models/User.models')

router.get("/", async(req, res) =>{
    res.json({
        "message" : "Hello, this is my home route!"
    })
})

router.get("/users", async (req, res, next) => {
    try {
        const response = await User.find({})
        res.status(200).json({
            record: response
        });
    }
    catch (err) {
        console.log(err);

    }
})

router.post("/users", async (req, res, next) => {
    try {
        const { f_name, l_name, gender, email, mobile, password, city, state } = req.body;
        const user = new User({
            f_name,
            l_name,
            gender,
            email,
            mobile,
            password,
            city,
            state
        });
        const response = await user.save();
        res.status(201).json({
            message: "User created successfully",
            record: response
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error creating user",
            error: err.message
        });
    }
})

module.exports = router;