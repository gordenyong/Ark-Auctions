function renderLogOut() {
  axios
    .delete("/api/sessions")
    .then((req, res) => {
      console.log(state.userName);
      state.userName = false;
      console.log(state.userName);
      document.querySelector("#page").innerHTML = `
  
      ${renderHeader()}
      <section class="auction-list">
        ${renderAuctions()}
      </section>
    `;
    })
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
}
