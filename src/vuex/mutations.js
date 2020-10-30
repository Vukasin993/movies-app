export const mutations = {
    setMovies(state, payload) {
        state.movies = payload
    },
    deleteMovie(state,id) {
        console.log('mutacija')
        state.movies = state.movies.filter(movies => movies.id !== id);
    },

    addMovie(state, payload) {
        state.movies = payload
        
    },
    setSearchText(state, searchText) {
        state.searchText = searchText;
    },

    setCounter(state, payload){
        state.counter = payload;
    },

    getMovie(state, id) {
        console.log('uzimam jedan film mutacija');
        state.movies = state.movies.filter(movies=> movies.id === id)
    }
}