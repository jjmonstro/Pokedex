const BASEURL = "https://pokeapi.co/api/v2/pokemon/"

//chamar a lista de poekmons
    let listaPokemons = []
    fetch(BASEURL + '?limit=1292').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { 
                let liPokemon = document.createElement("li")
                liPokemon.classList.add('pokemons')
                let liPokemonImg = document.createElement("img")
                fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then( (pokemon) => {(liPokemonImg.src = pokemon.sprites.front_default)})})
                liPokemon.innerHTML = pokemon.name
                liPokemon.appendChild(liPokemonImg)
                document.getElementById("ListaPokemons").appendChild(liPokemon)
            })
            return json})
            return listaPokemons
        }
    })
    
function getPokemonById(){
    const pokeId = document.getElementById("getByIDinput").value;

  if (pokeId.trim() !== "") {
    const url = BASEURL + pokeId;
    
    // Fazer uma requisição para a API usando a URL construída
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Atualizar o conteúdo do footer com informações do Pokémon
        const footer = document.getElementById("footer");
        const pokemonImage = document.getElementById("pokemonImage");
        const pokemonInfo = document.getElementById("pokemonInfo");

        // Atualizar a imagem
        pokemonImage.src = data.sprites.front_default;
        
        // Atualizar as informações
        pokemonInfo.innerHTML = `
          <p class="pokeIdInfo">Nome: ${data.name}</p>
          <p class="pokeIdInfo">Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>
        `;
      })
      .catch(error => {
        console.error("Erro ao buscar informações do Pokémon:", error);
      });
  } else {
    alert("Por favor, insira um ID de Pokémon válido.");
  }
}

    // function getpokemonbyId() {
    //     let PokeId = document.getElementById("getByIDinput").value;
    //     fetch(BASEURL + PokeId).then((Response) => {
    //       if (Response.status == 200) {
    //         PokebyId = Response.json().then((pokemon) => {
    //             let PokemonName = document.getElementsByClassName("namePoke")[0];
    //             let PokemonImg = document.getElementsByClassName("imgPoke")[0];
    //             PokemonName.classList.add("PokebyId")
    //             const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    //             PokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
    //             PokemonName.innerHTML = capitalizedPokemonName;
    //         });
    //       }
    //     });
    //   }

    


//Começo da resolução
function showSixPokemons(){
    let listaseis = []
    fetch(BASEURL+'?limit=6').then((Response)=>{Response.json().then((Abacate)=>{console.log(Abacate.results)})})
    
}

//Começo da Resolução
// function getpokemonbyId(){
//     fetch(BASEURL + 6).then( (Response) => { Response.json().then( (Pokemon) => {
//         PokeById=document.createElement
//     }) } )

    
// }

//outra solução NAO FUNFOU
// function getPokemonById2(){
//     let listaPokemons = []
// let pokeId=document.getElementById("getByIDinput").value
// fetch(BASEURL + pokeId).then( Response => {
//     if (Response.status == 200){
//         listaPokemons = Response.json().then( json => {json.results.map( pokemon => { 
//             let liPokemon = document.createElement("li")
//             liPokemon.classList.add('pokemons')
//             let liPokemonImg = document.createElement("img")
//             fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then( (pokemon) => {(liPokemonImg.src = pokemon.sprites.front_default)})})
//             liPokemon.innerHTML = pokemon.name
//             liPokemon.appendChild(liPokemonImg)
//             document.getElementById("footer").appendChild(liPokemon)
//         })
//         return json})
//         return listaPokemons
//     }
// })
// }

