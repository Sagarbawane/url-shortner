const mongoose = require("mongoose");
const validator = require("validator");
const shortHash = require("shorthash");

const Schema = mongoose.Schema;

const urlSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isURL(value);
      },
      message: function () {
        return "url enter is invalid";
      },
    },
  },
  hashUrl: {
    type: String,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
urlSchema.pre("save", function (next) {
  //execute logic to be run before saving record4

  console.log(shortHash.unique(this.originalUrl));
  this.hashUrl = shortHash.unique(this.originalUrl);

  next();
});
const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
