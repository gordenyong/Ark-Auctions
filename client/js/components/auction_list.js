function renderAuctionList() {
  document.querySelector("#page").innerHTML = `
   ${showLogInAuctionList()}
    `;
  renderAuctions();
  renderUserAuctions();
}

function showLogInAuctionList() {
  if (state.userName) {
    return `
      <section class="user-auction-list-section">
        <h1>Your Auctions</h1>
        <section id="user-auctions" class="user-auction-list auction-list">
        
        </section>
      </section
      <section class="auction-list-section">
      <h1>Active Auctions</h1>
        <section id="active-auctions" class="auction-list">
        </section>
      </section>
    `;
  } else {
    return `
      <section class="auction-list-section">
      <h1>Active Auctions</h1>
        <section id="active-auctions" class="auction-list">
        </section>
      </section>
      `;
  }
}

function renderAuctions() {
  axios
    .get("/api/auctions/")
    .then((res) => res.data)
    .then((auctions) => {
      console.log(auctions);
      document.querySelector("#active-auctions").innerHTML = auctions
        .map(
          (auction) => `
        <section class='auction' data-id="${
          auction.id
        }" onClick="auctionBiddingPage(${auction.id})">
            <div>
              <img src="${auction.image_url}" alt="">
            </div>   
            <header>
                <h2>${auction.item_name}</h2>
                <h3>$${auction.current_price}</h3>
                <h3>Ending in: ${auction.end_time - auction.start_time}</h3>
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
