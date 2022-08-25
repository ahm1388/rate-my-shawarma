import axios from 'axios'

const url = 'http://localhost:5000/restaurants'

export const fetchRestaurants = () => axios.get(url)