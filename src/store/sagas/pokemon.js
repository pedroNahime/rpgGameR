import { call, put } from 'redux-saga/effects'
import apis from '../../services/apis'

import { Creators as PokemonActions } from '../ducks/pokemon'

export function* getPokemon(action){
  try{
    const response = yield call(apis.pokemon, action.payload.data)
    
    yield put(PokemonActions.getPokemonSuccess(response.data))
  }catch(err){
  }
}