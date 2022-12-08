function convertPokemonTypesToList(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}

function convertPokemonTypesToNames(pokemonTypes){
    return pokemonTypes.map((typeSlot) => typeSlot.type.name)
}

function convertPokemonToList(pokemon){
    const pokemonType = convertPokemonTypesToNames(pokemon.types);
    return `
    <li class="pokemon ${pokemonType[0]}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToList(pokemon.types).join('')}
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
