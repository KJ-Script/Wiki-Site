const express = require("express");
const mongoose = require("mongoose");

const SettingSchema = mongoose.Schema({
  placeName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  environment: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
  association: {
    type: String,
    required: true,
  },
});

const SettingModel = mongoose.model("settings", SettingSchema);
module.exports = SettingModel;
