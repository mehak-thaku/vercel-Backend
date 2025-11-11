const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    email : {
        type:String,
        require:true,
        unique: true
    },
    password : {
        type:String,
        require:true
    }
});
const data = new mongoose.model("data",dataSchema);
module.exports = data;