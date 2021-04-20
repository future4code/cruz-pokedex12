export const goToHomePage = (history) => {
    history.push("/")
}
export const goToPokedexPage = (history) => {
    history.push("/Pokedex")
}
export const goToDetalhesPage = (history,nomePokemon) => {
    history.push(`/Detalhes/${nomePokemon}`)
}