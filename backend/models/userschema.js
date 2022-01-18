const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  College_name: {
    type: String,
    required: true,
  },
  College_id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Logins = mongoose.model("MYLOGIN", userSchema);

module.exports = Logins;
