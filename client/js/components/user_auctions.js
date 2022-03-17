function renderUserAuctions() {
  if (state.userName) {
    return state.auctions
      .filter((auction) => auction.user_id === "2")
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
  }
}

function auctionBiddingPage(auctionID) {
  axios
    .get(`/api/auctions/${auctionID}`)
    .then((res) => res.data)
    .then((auction) => renderAuction(auction));
}
