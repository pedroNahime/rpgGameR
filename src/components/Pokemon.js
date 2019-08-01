import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { Creators as PokemonActions } from '../store/ducks/pokemon';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

const PokemonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
class Pokemon extends Component {
    constructor(props) {
        super(props);

        this.pokemonInput = React.createRef();
        this.timer = null;

        this.state = {
            pokemon: '',
            pokemonExample: 'ponyta'
        };
    }

    componentDidMount() {
        this.props.getPokemonRequest(this.state.pokemonExample);
        this.pokemonInput.current.focus();
    }

    getPokemon() {
        this.props.getPokemonRequest(this.state.pokemon.toLowerCase());
    }

    handleChange = e => {
        clearTimeout(this.timer);

        this.setState({ pokemon: e.target.value });
        this.timer = setTimeout(() => {
            this.getPokemon();
        }, WAIT_INTERVAL);
    };

    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer);
            this.getPokemon();
        }
    };

    render() {
        const { pokemon } = this.props;
        console.log(pokemon.loading);

        return (
            <PokemonDiv>
                {pokemon.loading || !pokemon.data.sprites ?
                ( 
                <CircularProgress />
                ) 
                    :
                (
                    <img
                        src={pokemon.data.sprites.front_default}
                        alt={'pokemon'}
                    />
                )
                }
                {/* <input type="text" name="pokemon" id="pokemon" onChange={(e)=> this.setState({ name: e.target.value}) }/> */}

                <TextField
                    inputRef={this.pokemonInput}
                    id='pokemon'
                    name='pokemon'
                    label='Pokémon'
                    style={{ margin: 8 }}
                    placeholder='Pesquise aqui o pokémon desejado! :)'
                    helperText='Ex: Ponyta'
                    fullWidth
                    margin='normal'
                    InputLabelProps={{
                        shrink: true
                    }}
                    value={this.state.pokemon}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <button onClick={() => this.focusTextInput}>Search</button>
            </PokemonDiv>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Object.assign({}, PokemonActions), dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pokemon);
