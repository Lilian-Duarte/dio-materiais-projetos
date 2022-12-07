function convertPokemonToList(pokemon){
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">${pokemon.types.name}</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src= "https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif" alt="${pokemon.name}">
                </div>
            </li>
    `
}

const pokemonOl = document.getElementById('pokemonOl')

pokeApi.getPokemons().then ((pokemonList=[])=> { /* estamos convertendo uma lista para html */
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToList).join('')
})
/* const listaHtml = [];    
for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        listaHtml.push(convertPokemonToList(pokemon))
    }
    pokemonOl.innerHTML = listaHtml.join(''); */

/* os símbolos => são chamados de arrow functions e deixam o código mais limpo */
