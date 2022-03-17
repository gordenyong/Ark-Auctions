function renderAuction(data) {
  console.log(data);
  console.log(data.image_url);
  if (state.userName) {
    document.querySelector("#page").innerHTML = `
    <section class="auction-bid">
      <section>
        <h2>${data.item_name}</h2>
        <section>
          <img class="bid-image" src=${data.image_url} alt=“”>
          <div>
            <h3>Time remaining:04:39</h3>
            <h3>Current Bid: ${data.current_price}</h3>
            <form action=“”>
              <input type=“number” name=“placePrice” id=“placePriceId” value="${data.increment_price}" />
              <button id=“increaseBidBtn”>Place Bid</button>
            </form>
          </div>
        </section>

        <section>
        <h3>Description:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          molestias pariatur, laboriosam nulla velit tempore quia harum eos
          perferendis magni magnam iure, inventore veritatis illo ullam
          consequuntur quam. Qui, voluptatibus.
        </p>
      </section>
      <br><br>
      <p>Auction id:${data.id}<p>
    </section>
   
    `;
  } else {
    document.querySelector("#page").innerHTML = `
    <section class="auction-bid">
      <h3 class="login-to-bid">Log In To PLace Bid</h3>
      <section>
        <h2>${data.item_name}</h2>
        <section>
          <img class="bid-image" src=${data.image_url} alt=“”>
          <div>
            <h3>Time remaining:04:39</h3>
            <h3>Current Bid: ${data.current_price}</h3>
            
          </div>
        </section>

        <section class="bid-description">
        <h3>Description:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          molestias pariatur, laboriosam nulla velit tempore quia harum eos
          perferendis magni magnam iure, inventore veritatis illo ullam
          consequuntur quam. Qui, voluptatibus.
        </p>
      </section>
      <br><br>
      <p>Auction id:${data.id}<p>
    </section>
   
    `;
  }
}

function renderAuctionBid(auction) {
  console.log(auction);
}
