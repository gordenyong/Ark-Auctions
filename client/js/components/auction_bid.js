function renderAuction(data) {
  console.log(state);
  document.querySelector("#page").innerHTML = `
    <div class="auction-info">
      <div class="auction-left-side-info">
        <img src="${data.image_url}" alt="">
        <p>${data.item_description}</p>
      </div>

      <div class="auction-right-side-info">
        <div class="auction-data">
          <h3>${data.item_name}</h3>
        </div>

        <div class="auction-data">
          <span >Starting price:</span>
          <span>${data.starting_price}</span>
        </div>

        <div class="auction-data">
          <span >Increment price:</span>
          <span>${data.increment_price}</span>
        </div>
        
        <div class="auction-data">
          <span >Current price:</span>
          <span>${data.current_price}</span>
        </div>

        <button id="bid-btn">Increase Bid</button> 
      </div>
    </div>
    `;
}

function renderAuctionBid(auction) {
  console.log(auction);
}
