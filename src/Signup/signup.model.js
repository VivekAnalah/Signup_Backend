const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require: true,unique:true},
    mobile : {type : String, require: true},
    password : {type : String, require: true},
    
})
const Signup = mongoose.model("user-signup", SignupSchema);

module.exports = Signup;