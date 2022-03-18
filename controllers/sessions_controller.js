const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email).then((user) => {
    if (user) {
      const isValidPassword = bcrypt.compareSync(
        password,
        user.password_digest
      );
      if (isValidPassword) {
        //log the user in
        req.session.userId = user.id;
        //send back user's name
        res.status(200).json({ userName: user.name });
      } else {
        // send back a error message for wrong emial or password
        res.status(422).json({ message: "invalid email or password" });
      }
    } else {
      res.status(422).json({ message: "invalid email or password" });
    }
  });
});

router.delete("/", (req, res) => {
  req.session.userId = undefined;
  res.json({ message: "you have logged out" });
});

router.get("/", (req, res) => {
  const userId = req.session.userId;
  res.json({ userId: userId });
});

module.exports = router;
