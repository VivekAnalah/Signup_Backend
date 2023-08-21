const express = require("express");
const app = express.Router();

const Guarantee = require("./guarantee.model");

app.post("/", async (req, res) => {
  const { Gurantee_User_Name, Gurantee_User_Mob_Num, Gurantee_User_Mail} = req.body;
    
  try {
    let user = await Guarantee.find({ Gurantee_User_Mail });
    if (user.length > 0) {
      await Guarantee.updateOne({Gurantee_User_Mail}, {$inc: {Number_Of_Requests : 1}})
      return res.send({Status : "Ok", msg:`Hello, ${Gurantee_User_Name}! Thank you for your interest.`});
    } else {
      let newUser = await Guarantee.create({
        ...req.body,Number_Of_Requests: 1
      });
      return res.send({Status : "Ok", msg:`Hello, ${Gurantee_User_Name}! Thank you for your interest.`});
    }
  } catch (e) {
    res.status(400).send({Status : "Error", });
  }
});


module.exports = app;