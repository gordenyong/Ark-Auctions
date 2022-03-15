const state = {
  pokemons: []
}


axios.get('/api/pokemons')
  .then(res => res.data)
  .then(pokemons => {
    state.pokemons = pokemons
    renderPokemons()
  })