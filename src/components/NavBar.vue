<template>
<div>
    <div id="nav">
      <router-link to="/" class="navbar-brand">Movies</router-link> 
      <router-link to="/add-movie" class="navbar-brand">Add Movies</router-link> 
      <input @input="handleSearchTextChange" />
      <router-link to="/login" class="navbar-brand login"> Login</router-link>
    </div>
    <div>
      
    </div>
</div>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
// import AddMovie from './AddMovie'


export default {
    name: 'NavBar',
    components: {
    // AddMovie
  },

  
  computed: {
      ...mapGetters([
          'movies',
          'filteredMovies'
      ]),
  },
    methods: {
        ...mapMutations( [
          'setSearchText'
        ]),

   handleSearchTextChange(event) {
     this.setSearchText(event.target.value)
   }
}
}
</script>

<style scoped>
  .login {
    margin-left: 50px;
  }
</style>