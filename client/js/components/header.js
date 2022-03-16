function renderHeader() {
  document.querySelector("#header-nav").innerHTML = `
  <ul>
    <li id="signUpIcon" class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
    <li id="loginIcon" class="material-icons login-icon" onClick="render('login')">login</li>
  </ul>
  `;
}

renderHeader();
console.log("abcd");

function render(component) {
  console.log(component);
  if (component === "signUp") {
    renderSignUp();
  } else if (component === "login") {
    renderLogin();
  }
}

// render('pokemonList')
render("addAuction");
