import axios from 'axios'

const api = axios.create({
  baseURL:'https://pokeapi.co/api/v2/'
})

var header = {
    "Content-Type": "application/json"
}

const apis = {
  pokemon: (name) => api.get(`pokemon/${name}`, header)
}


export default apis