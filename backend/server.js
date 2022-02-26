const express = require("express");
const dotenv = require("dotenv");
const connctDB = require("./config/db");
const postRoute = require("./routes/posts");



// const login = require("./models/userschema");
const app = express();
dotenv.config({
  path: "./.env",
});
//connect mongodb database with backend using mongoose in separate file.
connctDB();
app.use(express.json());
//link the router file to connect with frontend easily.
app.use(require("./routes/userroutes"));
app.use("/post",postRoute);
app.get("/", (req, res) => {
  res.send("api is running...");
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server starting...${port}`));
