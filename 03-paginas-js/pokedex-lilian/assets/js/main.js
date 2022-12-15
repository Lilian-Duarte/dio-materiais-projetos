const pokemonOl = document.getElementById('pokemonOl')
const buttonPagination = document.getElementById('loadMoreButton')
const limit = 10;
let offset = 0;

function convertPokemonTypesToList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}

function convertPokemonTypesToNames(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => typeSlot.type.name)
}

/* const listaHtml = [];    
for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        listaHtml.push(convertPokemonToList(pokemon))
    }
    pokemonOl.innerHTML = listaHtml.join(''); */

/* os símbolos => são chamados de arrow functions e deixam o código mais limpo */

function convertPokemonToList(pokemon) {
    const pokemonType = convertPokemonTypesToNames(pokemon.types);
    return `
    <li class="pokemon ${pokemonType[0]}">
                <span class="number">#${pokemon.id}</span>
                <button id="btnpokemonDetail" type="button" class="name" onclick="openPokemonDetails('${pokemonType[0]}','${pokemon.id}','${pokemon.name}', '${pokemon.weight}')" name=${pokemon.name}> <span>${pokemon.name}</span>
                </button>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesToList(pokemon.types).join('')}
                    </ol>
                    <img src= "https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif" alt="${pokemon.name}">
                </div>
            </li>
    `
}
function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {
        const newHtml = pokemonsList.map(convertPokemonToList).join('')
        pokemonOl.innerHTML += newHtml

    })
}

loadMorePokemons(offset, limit)

buttonPagination.addEventListener('click', () => {
    offset += limit
    loadMorePokemons(offset, limit)
})

function openPokemonDetails(type, id, name, weight){
    const popup = document.getElementById('popup'); 
    const containerPopup = document.getElementById('container-popup');
    containerPopup.style.display = 'block'; 
    popup.style.display = 'block';
    const pokemonsDetails = document.getElementById('pokemonsDetails');
    pokemonsDetails.innerHTML += `<li class="Dpokemon ${type}">
                <span class="Dnumber">#${id}</span>
                <span class="Dname">${name}</span>
                <span class="Dweight">${weight}</span> 
                <div class="Ddetail">
                    <ol class="types">
                    </ol>
                    <img src= "https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif" alt="${name}">
                </div>
            </li> `
}









