function renderHeader() {
  const headerNav = document.querySelector("#header-nav");

  headerNav.innerHTML = `
  <h1>Welcome to Ark Auctions</h1>
  <ul>
    <li class="material-icons create-auction" onClick="render('auctions')">list</li>
    <li class="material-icons create-auction" onClick="render('createAuction')">add_circle</li>
    <li id="signUpIcon" class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
    <li id="loginIcon" class="material-icons login-icon" onClick="render('login')">login</li>
  </ul>
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
