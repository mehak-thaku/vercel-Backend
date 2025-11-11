const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json()); // important for json reading...
const mongoose = require('mongoose')
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
app.use(express.urlencoded({extended:true}));
const data = require("./models/signup");
data();

app.get('/',(req,res) => {
    res.send("welcome to the server")
})

app.post('/signup', async (req,res) => {
    try{
      const{ email , password} = req.body;

    console.log(`Received Signup attempt for: ${email} & ${password}`);

     const formData = new data({
         email,
         password
     })
    await formData.save();
    res.status(201).json({
        message:"Sucessfull login"
    })

    }catch(error){
       console.error("Mongoose Signup Error:", error);
    }

})

app.listen(PORT,() => {
    console.log(`server is listening port : ${PORT}`)
    mongoose.connect(uri);
    console.log("Database is connected")
})