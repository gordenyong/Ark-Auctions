const db = require("../db/db");

const Auction = {
  findAll: () => {
    const sql = "SELECT * FROM auctions";
    //next line returns an array of records (the records from our table)
    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  create: (name, type, image_url, current_price, time, auction_duration) => {
    console.log(name, type, image_url, current_price, time, auction_duration);
    const sql = `
            INSERT INTO auctions(name, type, image_url, current_price, time, auction_duration)
            VALUES ($1,$2,$3,$4,$5,$6)
            RETURNING *
        `;
    return db
      .query(sql, [
        name,
        type,
        image_url,
        current_price,
        time,
        auction_duration,
      ])
      .then((dbRes) => dbRes.rows[0]);
  },

  findAuctionById: (auctionId) => {
    console.log(auctionId);
  },
};

module.exports = Auction;
