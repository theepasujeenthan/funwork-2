var mongoose = require("mongoose");
var schoolSchema = mongoose.Schema({
    
    name: String,
    address: String,
    dob:String,
    nic:String,
    gender:String,
    contact:String,
    email:String,
    course:String
});

module.exports = mongoose.model("school", schoolSchema);