const express = require("express");
const session = require("express-session");
const Auction = require("../models/auction");

const router = express.Router();

router.get("/user_auctions", (req, res) => {
  const userID = req.session.userId;
  Auction.findAllByUser(userID).then((auctions) => res.json(auctions));
});

router.get("/", (req, res) => {
  Auction.findAll().then((auctions) => res.json(auctions));
});

router.post("/", (req, res) => {
  console.log(req.session.userId);
  if (req.session.userId) {
    const user_id = req.session.userId;
    const item_name = req.body.item_name;
    const item_description = req.body.item_description;
    const image_url = req.body.image_url;
    const starting_price = req.body.starting_price;
    const increment_price = req.body.increment_price;
    const current_price = req.body.current_price;
    const start_time = req.body.start_time;
    const end_time = req.body.end_time;

    Auction.create(
      user_id,
      item_name,
      item_description,
      image_url,
      starting_price,
      increment_price,
      current_price,
      start_time,
      end_time
    ).then((auction) => res.json(auction));
  } else {
    res.status(422).json({ message: "not logged in" });
  }
});

router.get("/:id", (req, res) => {
  const auctionId = req.params.id;

  Auction.findAuctionById(auctionId).then((auction) => res.json(auction));
});

module.exports = router;
