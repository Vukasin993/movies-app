import axios from 'axios'




export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },

    getters: {
       
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        async login( {dispatch}, credentials) {
            let response = await axios.post('http://localhost:8000/api/login', credentials)
            
            dispatch('attempt', response.data.token)
            console.log('auth/actions')
        },
        async attempt ({commit},token) {
            commit('SET_TOKEN', token)

            
        }
    },
}