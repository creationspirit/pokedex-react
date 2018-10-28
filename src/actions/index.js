import axios from 'axios';

export const FETCH_POKEMONS = 'fetch-pokemons';

const ROOT_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemon = () => {
    const payload = new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${ROOT_URL}/pokemon/`);
            
            const result = response.data.results.map(async (entry) => {
                const pokemonData = await axios.get(entry.url);
                return pokemonData.data;
            });
            resolve(Promise.all(result));
        } catch (err) {
            reject(err);
        }
    });
    return {
        type: FETCH_POKEMONS,
        payload
    };
}