const mongoose = require("mongoose");

const configuredb = () => {
  mongoose
    .connect("mongodb://localhost:27017/url-shortner", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("error in db", err);
    });
};
module.exports = configuredb;
