const express = require("express");
const app = express.Router();

const Investment = require("./investment.model");

app.post("/", async (req, res) => {
  const { Investment_User_Name, Investment_User_Mob_Num, Investment_User_Mail} = req.body;
    
  try {
    let user = await Investment.find({ Investment_User_Mail });
    if (user.length > 0) {
      await Investment.updateOne({Investment_User_Mail}, {$inc: {Number_Of_Requests : 1}})
      return res.send({status : "Ok", msg:`Hello, ${Investment_User_Name}! Thank you for your interest.`});
    } else {
      let newUser = await Investment.create({
        ...req.body,Number_Of_Requests: 1
      });
      return res.send({Status : "Ok", msg:`Hello, ${Investment_User_Name}! Thank you for your interest.`});
    }
  } catch (e) {
    res.status(400).send({Status : "Error", });
  }
});


module.exports = app;