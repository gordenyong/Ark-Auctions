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
        <section class='auction' data-id="${auction.id} onClick=">
            <div>
              <img src="${auction.image_url}" alt="">
            </div> 
            <header>
                <h2>${auction.name}</h2>
                <h3>$${auction.current_price}</h3>
            </header>
        </section>
    `
    )
    .join("");
}

function viewAuction(event) {
  const viewAuctionSpan = event.target;
  const auctionDOM = viewAuctionSpan.closest(".auction");
  const auctionId = auctionDOM.dataset.id;
  return state.auctions.filter((auction) => auction.id == auctionId);

  //axios.get(`/api/auctions/${auctionId}`)

  //   axios.view(`/api/auctions/${auctionId}`).then(() => {
  //     //selecting one auction
  //     state.auctions = state.auctions.filter(
  //       (singleAuction) => singleAuction.id == auctionId
  //     );
  //     //remove the treasure from the DOM
  //     //Approach 1:
  //     render("auctionList");
  //     //Approach 2:
  //     // treasureDOM.remove()
  //   });
}

// function auctionBiddingPage(auctionID) {
//   axios.get(`/api/auctions/${auctionID}`).then();
//   viewAuction();
// }
