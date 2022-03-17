function renderLogin() {
  document.querySelector("#page").innerHTML = `
  
    <section class="log-in">
      <header>
        
        <h2 class="other-htwo" onClick="render('signUp')">Sign Up</h2>
        <h2>Login:</h2>
      </header>  
      <form action="" onSubmit="login(event)">
      <div class="error"></div>
        <fieldset>
          <label for="">Email: </label>
          <input type="text" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label>
          <input type="password" name="password">
        </fieldset>
        <button>Login</button>
        <button onClick="render('auctions')">Cancel</button>
      </form>
     
    </section>
    <section class="auction-list">
      ${renderAuctions()}
    </section>
  `;
}

function login(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  console.log(state);
  axios
    .post("/api/sessions", data)
    .then((res) => res.data)
    .then((data) => (state.userName = data.userName))
    .then(() => {
      render("auctions");
      renderHeader();
    })
    .catch((error) => {
      let errorDOM = document.querySelector(".log-in .error");
      errorDOM.textContent = error.response.data.message;
    });
}
