const state = {
  auctions: [],
};

axios
  .get("/api/auctions")
  .then((res) => res.data)
  .then((auctions) => {
    state.auctions = auctions;
    renderAuctions();
  });
