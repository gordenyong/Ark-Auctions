function renderCreateAuction() {
  document.querySelector("#page").innerHTML = `
      <section class="create-auction">
        <form action="" onSubmit="createAuction(event)">
          <h2>Add auction:</h2>
          <fieldset>
            <label for="">Name: </label><br>
            <input type="text" name="name">
          </fieldset>
          <fieldset>
            <label for="">Type: </label><br>
            <input type="text" name="type">
          </fieldset>
          <fieldset>
            <label for="">Image URL: </label><br>
            <input type="text" name="image_url">
          </fieldset>
          <fieldset>
            <label for="">Current Price: </label><br>
            <input type="text" name="current_price">
          </fieldset>
          <fieldset>
            <label for="">Time: </label><br>
            <input type="text" name="time">
          </fieldset>
          <fieldset>
            <label for="">Auctin Duration: </label><br>
            <input type="text" name="auction_duration">
          </fieldset>
          <button>Add Auction</button>
        </form>
      </section>
    `;
}

function createAuction(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/auctions", data)
    .then((res) => res.data)
    .then((newAuction) => state.auctions.push(newAuction))
    .then(() => renderAuctionList())
    .catch((error) => {
      let errorDOM = document.querySelector(".create-auction.error");
      errorDOM.textContent = error.response.data.message;
    });
}
