import _ from 'lodash';

import { FETCH_POKEMONS } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POKEMONS:
            console.log(action.payload);
            return _.mapKeys(action.payload, 'id');
        default:
            return state;
    }
}