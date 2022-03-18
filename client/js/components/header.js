function renderHeader() {
  const headerNav = document.querySelector("#header-nav");

  headerNav.innerHTML = `
  <header>
    <h1 onClick="render('auctions')">Ark Auctions</h1>
    <ul>
      <li class="material-icons create-auction" onClick="render('auctions')">list</li>
        ${showSignUpLogIn()}
       
    </ul>
  </header>
  `;
}

function showSignUpLogIn() {
  if (state.userName) {
    return `
      <li class="material-icons create-auction" onClick="render('createAuction')">add_circle</li>

      <li cclass="material-icons-outlined" onClick="render('logout')">logout</li>
    `;
  } else {
    return `
      <li id="signUpIcon" class=" sign-up-icon" onClick="render('signUp')">Sign Up</li>
      <li id="loginIcon" class=" login-icon" onClick="render('login')">Login</li>
    
    `;
  }
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
  } else if (component === "logout") renderLogOut();
}

// // component to render initially
// render("auctions");
