const db = require("../db/db");

const Auction = {
  findAll: () => {
    const sql = "SELECT * FROM auctions";
    //next line returns an array of records (the records from our table)
    return db.query(sql).then((dbRes) => dbRes.rows);
  },

  create: (
    user_id,
    item_name,
    item_description,
    image_url,
    starting_price,
    increment_price,
    current_price,
    start_time,
    end_time
  ) => {
    const sql = `
            INSERT INTO auctions(user_id, item_name, item_description, image_url, starting_price, increment_price, current_price, start_time, end_time)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
            RETURNING *
        `;
    return db
      .query(sql, [
        user_id,
        item_name,
        item_description,
        image_url,
        starting_price,
        increment_price,
        current_price,
        start_time,
        end_time,
      ])
      .then((dbRes) => dbRes.rows[0]);
  },

  findAuctionById: (auctionId) => {
    const sql = `
        SELECT * FROM auctions WHERE id = $1
    `;
    return db.query(sql, [auctionId]).then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = Auction;
