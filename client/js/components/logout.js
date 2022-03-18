function renderLogOut() {
  axios
    .delete("/api/sessions")
    .then((req, res) => {
      state.userName = false;
      render("auctions");
      renderHeader();
    })
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
    });
}
