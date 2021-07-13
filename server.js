const dotenv = require('dotenv');
const express = require('express');
const app = express();
const authRoute = require('./routes/authRoutes');
const mongoose = require('mongoose');
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:"true"},() => {
    console.log("db connected !..");
})

app.use("/api/user/",authRoute);


app.listen(8080,() => {
    console.log("server start at 8080");
})