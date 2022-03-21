const express = require("express");

//middlewares
const logger = require("./middlewares/logger");
const sessions = require("./middlewares/sessions");

//controllers
const auctionController = require("./controllers/auction_controller");
const usersController = require("./controllers/users_controller");
const sessionsController = require("./controllers/sessions_controller");

// access app object
const app = express();
const port = process.env.PORT || 3000;

// start server
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logger);

app.use(express.static("client"));

app.use(express.json());
app.use(sessions);
app.use("/api/auctions", auctionController);
app.use("/api/users", usersController);
app.use("/api/sessions", sessionsController);
