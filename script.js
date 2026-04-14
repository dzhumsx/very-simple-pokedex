url = "https://pokeapi.co/api/v2/pokemon/"

async function searchPokemon() {
    pokemon = document.getElementById("pokemonSearch").value;

    try {
        const response = await fetch(`${url}${pokemon}`)
        const data = await response.json()

        document.getElementById("pokemon-image-front").src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
        document.getElementById("pokemon-image-back").src = data.sprites.versions['generation-v']['black-white'].animated.back_default;
        document.getElementById("pokemon-image-shiny-front").src = data.sprites.versions['generation-v']['black-white'].animated.front_shiny;
        document.getElementById("pokemon-image-shiny-back").src = data.sprites.versions['generation-v']['black-white'].animated.back_shiny;

        document.getElementById("pokemon-id").textContent = data.id;
        document.getElementById("pokemon-name").textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        document.getElementById("pokemon-height").textContent = data.height / 10 + " m";
        document.getElementById("pokemon-weight").textContent = data.weight / 10 + " Kg";
    } catch (err) {
        document.getElementById("pokemon-name").textContent = "Pokemon not found";
        document.getElementById("pokemon-id").textContent = "NaN";
        return;
    }
}
