const express = require("express");
const app = express.Router();

const Claim = require("./claim.model");

app.post("/", async (req, res) => {
  const { Insurance_Type, Claimant_Name, Policy_Number, Mobile_Number, Claimant_Email, Claimant_Query} = req.body;
    
  try {
    let user_claim = await Claim.find({ Mobile_Number, Claimant_Email });
    if (user_claim.length > 0) {
      console.log(user_claim[0]._id);
     await Claim.findByIdAndUpdate(user_claim[0]._id, {
        $push: {
          'Claimant_Details.Insurance_Type': Insurance_Type,
          'Claimant_Details.Policy_Number': Policy_Number,
          'Claimant_Details.Claimant_Query': Claimant_Query
        }
      }, { new: true })
     
      return res.send({status : "OK", msg:"Thank you! Your insurance claim request has been successfully submitted. "});
    } else {
        const Claimant_Details = {
            Insurance_Type : [Insurance_Type],
            
            Policy_Number : [Policy_Number],
            Claimant_Query : [Claimant_Query]
        }
      let new_user_claim = await Claim.create({
        Claimant_Email,Mobile_Number,Claimant_Name, Claimant_Details
      });
      return res.send({Status : "Ok", msg:"Thank you! Your insurance claim request has been successfully submitted. "});
    }
  } catch (e) {
    res.status(500).send({Status : "Error" });
  }
});
app.get("/", async (req, res) => {
  
    
  try {
    let Claim_request = await Claim.find();
    res.send({All_Claim_Request: Claim_request})
  
  } catch (e) {
    res.send("Bad Request");
  }
});

module.exports = app;