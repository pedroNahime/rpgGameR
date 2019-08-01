export const Types = {
    GET_POKEMON: 'pokemon/GET_REQUEST',
    GET_SUCCESS: 'pokemon/GET_SUCCESS'
}

const INITIAL_STATE = {
    data: [
        'ponyta'
    ],
    loading: false,
}

export default function pokemon(state = INITIAL_STATE, action){
    switch (action.type){
        case Types.GET_POKEMON:
            return { ...state, loading: true }
        case Types.GET_SUCCESS:
            return { ...state, data: action.payload.data, loading: false }
        default:
            return state
    }
}

export const Creators = {
    getPokemonRequest: data => ({
        type: Types.GET_POKEMON,
        payload: { data }
    }),

    getPokemonSuccess: (data) => ({
        type: Types.GET_SUCCESS,
        payload: { data }
    }),
}
  