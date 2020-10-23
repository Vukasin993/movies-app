import axios from 'axios';

class Movies {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.interceptors.request.use(function(config) {
            const token = localStorage.getItem('token');
            if(token) {
                config.headers.Authoratization = "Bearer " + token;
            }
            return config;
        });
    }
    async getAll() {
        const response = await axios.get('/movies');

        return response.data
    }

    add(data) {
        return axios.post('/movies', data);
        
    }

    deleteMovie(id) {
        return axios.delete(`/movies/${id}`)
    }

}

export const movies = new Movies();