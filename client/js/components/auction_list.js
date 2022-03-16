function renderAuctionList() {
  document.querySelector("#page").innerHTML = `
    <section class="auction-list">
        ${renderAuctions()}
    </section>`;
}

function renderAuctions() {
  return state.auctions
    .map(
      (auction) => `
        <section class='auction' data-id="${auction.id}">
            <header>
                <h2>${auction.name}</h2>
            </header>
            <p>${auction.type}</p>
            <img src="${auction.image_url}" alt="">
            <p>${auction.current_price}</p>
            <p>${auction.time}</p>
            <p>${auction.auction_duration}</p>
        </section>
    `
    )
    .join("");
}
