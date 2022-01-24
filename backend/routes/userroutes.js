//for all routes of our website

const express = require("express");
const router = express.Router();
const connctDB = require("../config/db");
const Chat = require("../models/chatschema");
const Logins = require("../models/userschema");
const Messages = require("../models/messageSchema");
const generateToken = require("../config/generatetoken");
const protect = require("../middleware/authmiddleware");

connctDB();
//login routes to login into the website
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
      res.status(200);
      const token = generateToken(userLogin._id);
      res.send({
        _id: userLogin._id,
        College_id: userLogin.College_id,
        College_name: userLogin.College_name,
        name: userLogin.name,
        email: userLogin.email,
        pic: userLogin.pic,
        token: token,
      });
      res.json({ message: "login sucessfully" });
    }
  } catch (e) {
    console.error("some error accure ");
  }
});

//reset password routes if user forgot the password

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

//to search the users of our website
//it also uses the protect middleware so search result will not return currently loggin user.
router.get("/message", protect, async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const userid = await Logins.find(keyword).find({
    _id: { $ne: req.message._id },
  });
  console.log(userid);
});

//create one to one chat and check the user who is craeting the chat is valid authorize user or not
//alse check other user whith whome the chat will create that user is also valid authorize or not
router.post("/chat", protect, async (req, res) => {
  //create one on one chat
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    $and: [
      { users: { $elemMatch: { $eq: req.message._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password", Logins)
    .populate("latestMessage", Messages);

  isChat = await Logins.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      users: [req.message._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password",
        Logins
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});
//fetch all the chats
router.get("/chat", protect, async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.message._id } } })
      .populate("users", "-password", Logins)
      .populate("latestMessage", Messages)
      .sort({
        updateAt: -1,
      })
      .then(async (results) => {
        results = await Logins.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).send(results);
      });
  } catch (e) {
    res.status(400);
    console.error(e);
  }
});

module.exports = router;
