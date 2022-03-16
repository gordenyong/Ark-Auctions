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
            <label for="">Current Type: </label><br>
            <input type="text" name="type">
          </fieldset>
          <fieldset>
            <label for="">Image URL: </label><br>
            <input type="text" name="image_url">
          </fieldset>
          <fieldset>
            <label for="">Starting Price: </label><br>
            <input type="text" name="current_price">
          </fieldset>
          <fieldset>
            <label for="">Starting time: </label><br>
            <input type="text" name="time">
          </fieldset>
          <fieldset>
            <label for="">Auction Duration: </label><br>
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
  console.log(form);
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/auctions", data)
    .then(console.log(data))
    .then((res) => {
      res.data;
      console.log(res.data);
    })
    .then(console.log(state.auctions))
    .then((newAuction) => state.auctions.push(newAuction))
    .then(console.log(state.auctions))
    .then(() => renderAuctionList());
  // .catch((error) => {
  //   let errorDOM = document.querySelector(".create-auction .error");
  //   errorDOM.textContent = error.response.data.message;
  // });
}
