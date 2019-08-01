import React, { Component } from 'react'
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import { Creators as PokemonActions } from '../store/ducks/pokemon'
import { connect } from 'react-redux'



const PokemonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
class Pokemon extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'ponyta'
        }
    }

    componentDidMount(){
        this.props.getPokemonRequest(this.state.name)
    }

    getPokemon(){
        this.props.getPokemonRequest(this.state.name.toLowerCase())
    }

    render(){
        const { pokemon } = this.props

        return (
            <PokemonDiv>
                {pokemon.data.sprites &&
                    <img src={pokemon.data.sprites.front_default} alt={"pokemon"}/>
                }
                <input type="text" name="pokemon" id="pokemon" onChange={(e)=> this.setState({ name: e.target.value}) }/>
                <button onClick={() => this.getPokemon()}>Search</button> 
            </PokemonDiv>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, PokemonActions), dispatch)
  
  export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)

