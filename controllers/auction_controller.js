const express = require("express");
const Auction = require("../models/auction");

const router = express.Router();

router.get("/", (req, res) => {
  Auction.findAll().then((auctions) => res.json(auctions));
});

module.exports = router;

// router.post("/", (req, res) => {
//   if (req.session.userId) {
//     const name = req.body.name;
//     const clue = req.body.clue;
//     const address = req.body.address;

//     Treasure.create(name, clue, address).then((treasure) => res.json(treasure));
//   } else {
//     res.status(422).json({ message: "not logged in" });
//   }
// });
