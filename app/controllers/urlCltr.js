const mongoose = require("mongoose");

const Url = require("../models/url");

const urlCltr = {};

urlCltr.list = (req, res) => {
  Url.find()
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlCltr.create = (req, res) => {
  const body = req.body;
  const urlCreate = new Url(body);
  urlCreate
    .save()
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};
urlCltr.show = (req, res) => {
  const id = req.params.id;
  Url.findById(id)
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlCltr.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Url.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};

urlCltr.destroy = (req, res) => {
  const id = req.params.id;
  Url.findByIdAndDelete(id)
    .then((url) => {
      res.json(url);
    })
    .catch((err) => {
      res.json(err);
    });
};
urlCltr.redirect = (req, res) => {
  const hash = req.params.hash;
  Url.findOneAndUpdate({ hashedUrl: hash }, { new: true, runValidators: true })
    .then((url) => {
      // console.log('hi manish')
      res.redirect(url.originalUrl);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = urlCltr;
