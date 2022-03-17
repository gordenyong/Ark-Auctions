function renderAuctionList() {
  document.querySelector("#page").innerHTML = `
   ${showLogInAuctionList()}
    `;
}

function showLogInAuctionList() {
  if (state.userName) {
    return `
      <section class="user-auction-list-section">
        <h1>Your Auctions</h1>
        <section class="user-auction-list auction-list">
          ${renderUserAuctions()}
        </section>
      </section
      <section class="auction-list-section">
      <h1>Active Auctions</h1>
        <section class="auction-list">
          ${renderAuctions()}
        </section>
      </section>
    `;
  } else {
    return `
      <section class="auction-list-section">
      <h1>Active Auctions</h1>
        <section class="auction-list">
          ${renderAuctions()}
        </section>
      </section>
      `;
  }
}

function renderAuctions() {
  if (state.userName) {
    return state.auctions
      .filter((auction) => auction.user_id !== "2")
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
  } else {
    return state.auctions
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
  }
}
