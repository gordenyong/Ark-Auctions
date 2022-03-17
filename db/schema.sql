CREATE DATABASE auction_db;
\c auction_db

CREATE TABLE auctions(
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  item_name TEXT,
  item_description TEXT,
  image_url TEXT,
  starting_price TEXT, 
  increment_price TEXT, 
  current_price TEXT,
  start_time TEXT, 
  end_time TEXT 
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT, 
  password_digest TEXT,
  location TEXT
);


  -- item_name, item_description, image_url, starting_price, increment_price, current_price, start_time, end_time, 

