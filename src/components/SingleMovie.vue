<template>
        
    <div >
        
        <div class="container"  style="width: 300px; height: 800px; margin-bottom: 30px;">
            
            <h1 class="card-title">{{movie.title}}</h1>

            <div>{{movie.genre}}</div>
            <div>{{movie.duration}} min</div>
            <div>{{movie.director}}</div>
            <div>{{movie.releaseDate}}</div>

        
        </div>
    </div>
  
</template>

<script>
import {movies} from '../services/Movies'
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            movie: [],
    
            }
        },

  async created() {
      this.movie = (await movies.getOne(this.$route.params.id)).data
     
    },

    methods: {
         ...mapActions( [
          'getOne'
      ]),
    //     getMovie() {
    //         movies.getOne(this.$route.params.id).then((data) => {
    //         this.movie = data;
    //         });
    // },
}
}
</script>

<style scoped>

</style>