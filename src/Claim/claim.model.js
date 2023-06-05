const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
    Claimant_Details : {
        type: Object, 
        default : {
            Insurance_Type : {type : Array, default: []},
            Policy_Number : {type : Array, default: []},
            Claimant_Query :{type : Array, default: []},
        }
    }, 
    Mobile_Number : {type : String, require: true},
    Claimant_Email : {type : String, require: true},
    Claimant_Name : {type : String},
    
})
const Claim = mongoose.model("user-claim", ClaimSchema);

module.exports = Claim;