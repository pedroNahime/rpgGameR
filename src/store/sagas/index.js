import { all, takeLatest } from 'redux-saga/effects'
import { Types as PokemonTypes } from '../ducks/pokemon'
import { getPokemon } from './pokemon'

export default function* rootSaga(){
    yield all([
        takeLatest(PokemonTypes.GET_POKEMON, getPokemon),
    ])
}