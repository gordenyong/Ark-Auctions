function renderAuctionList() {
  document.querySelector("#page").innerHTML = `
    <section class="auction-list">
        ${renderAuctions()}
    </section>`;
}

function renderAuctions() {
  console.log(state.auctions);
  return state.auctions
    .map(
      (auction) => `
        <section class='auction' data-id="${auction.id}" onClick="auctionBiddingPage(${auction.id})">
            <div>
              <img src="${auction.image_url}" alt="">
            </div>   
            <header>
                <h2>${auction.name}</h2>
                <h3>$${auction.current_price}</h3>
            </header>
            
            <body>
            <input type="text" name="placePrice" class="place-price">
            <button>Place Bid</button>
            </body>
        </section>
    `
    )
    .join("");
  console.log();
}

function auctionBiddingPage(auctionID) {
  axios.get(`/api/auctions/${auctionID}`).then();
  renderAuction();
}
