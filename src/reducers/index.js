import { combineReducers } from 'redux';
import PokemonsReducer from './reducer-pokemons';

const rootReducer = combineReducers({
    pokemons: PokemonsReducer
});

export default rootReducer;