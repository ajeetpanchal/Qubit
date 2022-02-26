//userschema is table for storing the information about users of our website
const mongoose = require("mongoose");
const userschema = new mongoose.Schema(
  {
    College_name: {
      type: String,
      required: true,
    },
    College_id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);
const Logins = mongoose.model("MYLOGIN", userschema);

module.exports = Logins;
