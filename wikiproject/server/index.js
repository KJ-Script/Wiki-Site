const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const SettingModel = require("./models/Setting");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//creating a dtatbase connection
mongoose.connect(
  "mongodb+srv://keti:test123@wiki.ghfxak6.mongodb.net/wikidatabase?retryWrites=true&w=majority"
);

// User display
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

//User Registration
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});

//User Authentication
app.post("/validate", async (req, res) => {
  const user = await UserModel.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        password: user.password,
      },
      "test123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

//creating a setting
app.post('/create/setting', async(req, res) => {
  const setting = req.body;
  const newSetting = new SettingModel(setting)
  await newSetting.save()
  res.json(setting)
}) 

//Display Settings
app.get("/display/setting", (req, res) => {
  SettingModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

//Running the server
app.listen(8080, (req, res) => {
  console.log("server is working");
});
