const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const jwt = require("jsonwebtoken")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://keti:test123@wiki.ghfxak6.mongodb.net/wikidatabase?retryWrites=true&w=majority"
);

app.get("/users", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
      console.log("Error: ", err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

app.post("/validate", async (req, res) => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  
  if(user) {
    const token = jwt.sign({
      username: user.username,
      password: user.password
    }, 'test123')
   return res.json({status: 'ok', user: token })
  } else {
    return res.json({status: 'error', user: false})
  }
});

app.listen(8080, (req, res) => {
  console.log("server is working");
});