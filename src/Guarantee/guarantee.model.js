const mongoose = require("mongoose");

const GuaranteeSchema = new mongoose.Schema(
  {
    Gurantee_User_Name: { type: String },
    Gurantee_User_Mail: { type: String, require: true, unique: true },
    Gurantee_User_Mob_Num: { type: String },
    Number_Of_Requests: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);
const Guarantee = mongoose.model("guarantee-user", GuaranteeSchema);

module.exports = Guarantee;
