function renderSignUp() {
  document.querySelector("#page").innerHTML = `
    <section class="sign-up">
      <header>
        <h2>Sign Up:</h2>
        <h2 class="other-htwo" onClick="render('login')">Login</h2>
      </header>  
      <form action="" onSubmit="signUp(event)">
        <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Email: </label>
          <input type="text" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label>
          <input type="password" name="password">
        </fieldset>
        <button>Sign Up</button>
        <button onClick="render('auctions')">Cancel</button>
      </form>
     
    </section>
    <section class="auction-list">
      ${renderAuctions()}
    </section>
  `;
}

function signUp(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form));
  axios
    .post("/api/users", data)
    .then((res) => res.data)
    .then((userName) => console.log(userName))
    .then(render("auctions"));
}
