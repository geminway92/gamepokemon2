import axios from 'axios'

const pointPlayerApi = axios.create({

    baseURL: 'https://pokemon-game-fda90-default-rtdb.firebaseio.com/'

})

export default pointPlayerApi