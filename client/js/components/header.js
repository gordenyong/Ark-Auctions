function renderHeader() {
  const headerNav = document.querySelector("#header-nav");

  headerNav.innerHTML = `
  <header>
    <h1>Ark Auctions</h1>
    <ul>
      <li class="material-icons create-auction" onClick="render('auctions')">list</li>
      <li class="material-icons create-auction" onClick="render('createAuction')">add_circle</li>
      
      <li id="signUpIcon" class=" sign-up-icon" onClick="render('signUp')">Sign Up</li>
      <li id="loginIcon" class=" login-icon" onClick="render('login')">Login</li>
    </ul>
  </header>
  `;
}

//render header on page load
renderHeader();

function render(component) {
  console.log(component);
  if (component === "createAuction") {
    renderCreateAuction();
  } else if (component === "signUp") {
    renderSignUp();
  } else if (component === "login") {
    renderLogin();
  } else if (component === "auctions") {
    renderAuctionList();
  }
}

// // component to render initially
// render("auctions");
