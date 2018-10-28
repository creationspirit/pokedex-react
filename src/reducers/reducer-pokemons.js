import _ from 'lodash';

import { FETCH_POKEMONS } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POKEMONS:
            console.log(action.payload.data)
            return _.mapKeys(action.payload.data.results, 'name');
        default:
            return state;
    }
}