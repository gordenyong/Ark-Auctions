function renderUserAuctions() {
  axios
    .get("/api/auctions/user_auctions")
    .then((res) => res.data)
    .then((auctions) => {
      console.log(auctions);
      document.querySelector("#user-auctions").innerHTML = auctions
        .map(
          (auction) => `
      <section class='user-auction auction' data-id="${auction.id}" onClick="auctionBiddingPage(${auction.id})">
          <div>
            <img src="${auction.image_url}" alt="">
          </div>   
          <header>
              <h2>${auction.item_name}</h2>
              <h3>$${auction.current_price}</h3>
          </header>
      </section>
  `
        )
        .join("");
    });
}

function auctionBiddingPage(auctionID) {
  axios
    .get(`/api/auctions/${auctionID}`)
    .then((res) => res.data)
    .then((auction) => renderAuction(auction));
}
