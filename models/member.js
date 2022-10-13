const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      //   lowercase:true
      uppercase: true,
    },
    color: {
      name: String,
      gray: Boolean,
    },
    active: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", memberSchema);
