<template>
  <div class="hello">
    <h1>Movies</h1>
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"> 

    </MovieCard>
  </div>
</template>

<script>
import {mapGetters, mapActions} from '../vuex/store'
import MovieCard from './MovieCard'

export default {
  name: 'AppMovies',
  components: {
    MovieCard
  },
      data () {
        return {
            movie: {
                title: '',
                director: '',
                imageUrl: '',
                duration: '',
                releaseDate: '',
                genre: ''
                }
         }
},

 computed: {
        ...mapGetters([
            'movies'
        ])
    },

    methods: {

        ...mapActions( [
            'deleteMovie',
            'fetchMovies'
        ])
    },

       created() {
       this.fetchMovies();
       const response = this.movies;
       console.log(response);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
