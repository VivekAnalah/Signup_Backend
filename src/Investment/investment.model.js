const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema(
  {
    Investment_User_Name: { type: String },
    Investment_User_Mail: { type: String, require: true, unique: true },
    Investment_User_Mob_Num: { type: String },
    Number_Of_Requests: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);
const Investment = mongoose.model("investment-user", InvestmentSchema);

module.exports = Investment;
