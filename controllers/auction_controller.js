const express = require("express");
const Auction = require("../models/auction");

const router = express.Router();

router.get("/", (req, res) => {
  Auction.findAll().then((auctions) => res.json(auctions));
});

module.exports = router;

router.post("/", (req, res) => {
  console.log(req.body);
  if (req.session.userId) {
    const name = req.body.name;
    const type = req.body.type;
    const img_url = req.body.image_url;
    const current_price = req.body.current_price;
    const time = req.body.time;
    const auction_duration = req.body.auction_duration;

    Auction.create(
      name,
      type,
      img_url,
      current_price,
      time,
      auction_duration
    ).then((auction) => res.json(auction));
  } else {
    res.status(422).json({ message: "not logged in" });
  }
});
