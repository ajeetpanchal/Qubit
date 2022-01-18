const express = require("express");
const router = express.Router();
const connctDB = require("../config/db");
const Logins = require("../models/userschema");
connctDB();
//login routes
router.post("/login", async (req, res) => {
  // res.json({ message: req.body });
  try {
    // res.send(req.body.password);
    const { College_name, College_id, password } = req.body;
    // res.send(password);
    if (!College_name || !College_id || !password) {
      return res.status("400").json({ error: "please enter data " });
    }
    // res.send({ message: "awesom " });
    const userLogin = await Logins.findOne({
      College_name: College_name,
      College_id: College_id,
      password: password,
    });
    console.log(userLogin);
    if (!userLogin) {
      res.status("400").json({ error: "please enter valid data" });
    } else {
      res.json({ message: "user login suceessfully" });
    }
  } catch (e) {
    console.error("some error accure ");
  }
});

router.post("/forgot", async (req, res) => {
  try {
    const { College_id, new_password, confirm_password } = req.body;
    // console.log(College_id);
    if (!College_id) {
      return res.status("400").json({ error: "please enter valid email id " });
    }
    const userLogin = await Logins.findOne({
      College_id: College_id,
    });
    console.log(userLogin);
    if (!userLogin) {
      res.status("400").json({ error: "please enter valid data" });
    } else {
      if (new_password === confirm_password) {
        const update = await Logins.updateOne(
          { College_id: College_id },
          {
            $set: {
              password: confirm_password,
            },
          }
        );
        res.status("200").json({ message: "awsome your password change" });
      } else {
        res.status("400").json({ error: "please enter valid data" });
      }
    }
  } catch (e) {
    console.log("some issue is there ");
  }
});

module.exports = router;
