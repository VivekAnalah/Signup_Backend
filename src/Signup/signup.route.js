const express = require("express");
const app = express.Router();

const Signup = require("./signup.model");

app.post("/", async (req, res) => {
  const { email, name, mob } = req.body;
    
  try {
    let user = await Signup.find({ email });
    if (user.length > 0) {
      return res.send({status : "Already a user", msg:"This Email Already used Please Use Different Email ID"});
    } else {
      let newUser = await Signup.create({
        ...req.body,
      });
      return res.send({Status : "Ok", msg:"Registration successful"});
    }
  } catch (e) {
    res.send("Please Fill All Credendtials");
  }
});

app.get("/", async (req, res) => {
 
    
  try {
    let user = await Signup.find();
   res.send({UserDetails : user})
  } catch (e) {
    res.send("Bad Request");
  }
});


module.exports = app;