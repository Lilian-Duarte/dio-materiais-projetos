const pokemonOl = document.getElementById('pokemonOl')
const buttonPagination = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;

function convertPokemonTypesToList(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}

function convertPokemonTypesToNames(pokemonTypes){
    return pokemonTypes.map((typeSlot) => typeSlot.type.name)
}

/* const listaHtml = [];    
for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        listaHtml.push(convertPokemonToList(pokemon))
    }
    pokemonOl.innerHTML = listaHtml.join(''); */

/* os símbolos => são chamados de arrow functions e deixam o código mais limpo */

function convertPokemonToList(pokemon){
    const pokemonType = convertPokemonTypesToNames(pokemon.types);
    return `
    <li class="pokemon ${pokemonType[0]}">
                <span class="number">#${pokemon.id}</span>
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
function loadMorePokemons (offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonsList=[])=>{
        const newHtml = pokemonsList.map(convertPokemonToList).join('')
        pokemonOl.innerHTML += newHtml

    })
}

loadMorePokemons(offset,limit)
buttonPagination.addEventListener('click',()=>{
    offset += limit
    loadMorePokemons(offset, limit)
})



