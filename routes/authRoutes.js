const express = require('express');
const authRoute = express.Router();
const User = require('../models/user');
const {hashGenerator} = require('../helpers/hashing');

authRoute.post("/signup",async (req,res) => {
    const hashpassword = await hashGenerator(req.body.password);
   const user = new User({
       username:req.body.username,
       email:req.body.email,
       password:hashpassword
   })
   const saveuser = await user.save();
   res.send(saveuser);
})

module.exports = authRoute;