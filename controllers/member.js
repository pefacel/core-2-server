const { json } = require("express");
const Member = require("../models/member");

exports.create = async (req, res) => {
  try {
    const newMember = await new Member(req.body).save();
    res.status(200).json(newMember);
  } catch (error) {
    console.log(error);
  }
};

// ReadAlll
exports.listAll = async (req, res) => {
  try {
    const list = await Member.find();
    res.status(200).json(list);
  } catch (error) {
    console.log(error);
  }
};

// ReadOne

exports.showBody = async (req, res) => {
  let body = req.body;

  req.body.cosa = "+++++s68fa86sf" + req.body.cosa;

  res.status(200).json(body);
};

exports.read = async (req, res) => {
  try {
    const read = await Member.findOne({
      _id: req.params.id,
    });
    res.status(200).json(read);
  } catch (error) {
    res.status(400).json({
      err: err.message,
      code: err.code,
    });
  }
};

// Delete

exports.remove = async (req, res) => {
  try {
    const deleted = await Member.findOneAndRemove({
      _id: req.params.id,
    });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({
      err: err.message,
      code: err.code,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({
      err: err.message,
      code: err.code,
    });
  }
};
