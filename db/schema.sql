CREATE DATABASE auction_db;
\c auction_db

CREATE TABLE auctions(
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  name TEXT,
  type TEXT,
  image_url TEXT,
  increment_price TEXT, 
  current_price TEXT, 
  datetime TEXT, 
  active TEXT, 
  auction_duration TEXT
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT, 
  password_digest TEXT,
  location TEXT
);