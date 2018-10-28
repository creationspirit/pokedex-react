import axios from 'axios';

export const FETCH_POKEMONS = 'fetch-pokemons';

const ROOT_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemon = () => {
    const request = axios.get(`${ROOT_URL}/pokemon/`);

    return {
        type: FETCH_POKEMONS,
        payload: request
    };
}