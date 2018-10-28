import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';
import { Link } from 'react-router-dom';

class PokemonIndex extends Component {
    componentDidMount() {
        this.props.fetchPokemon();
    }

    renderPokemon() {
        return _.map(this.props.pokemons, pokemon => {
            return (
                 <li key={pokemon.id}>
                    <img src={pokemon.sprites.front_default} alt='pokemon frontal' />
                    <Link to={`/pokemons/${pokemon.id}`}>
                        {pokemon.name}
                    </Link>
                 </li>
            )
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderPokemon()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { pokemons: state.pokemons };
}

export default connect(mapStateToProps, { fetchPokemon })(PokemonIndex);