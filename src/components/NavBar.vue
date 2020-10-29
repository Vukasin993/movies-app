<template>
<div>
    <div id="nav">
      <router-link to="/" class="navbar-brand">Movies</router-link> 
      <router-link to="/add-movie" class="navbar-brand">Add Movies</router-link> 
      <input @input="handleSearchTextChange" />
      <router-link to="/login" class="navbar-brand login" v-if="!isUserAuthenticated"> Login</router-link>
      <router-link to="/register" class="navbar-brand" v-if="!isUserAuthenticated">Register</router-link>
     
    </div>
     <button v-if="isUserAuthenticated" @click="onLogout" type="button" class="btn btn-dark btn-sm">Log out</button>
    <div>
      
    </div>
</div>

</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
// import AddMovie from './AddMovie'


export default {
    name: 'NavBar',
    components: {
    // AddMovie
  },

  
  computed: {
      ...mapGetters({
           isUserAuthenticated: "auth/isUserAuthenticated",
          movies:'movies',
          filteredMovies: 'filteredMovies'
      }),
  },
    methods: {
        ...mapMutations( [
          'setSearchText'
        ]),

       handleSearchTextChange(event) {
         this.setSearchText(event.target.value)
        },

        ...mapActions({
          logout: "auth/logout"
        }),

        onLogout() {
          this.logout();
          this.$router.push({
            name:"login"
          });
        }
}
}
</script>

<style scoped>
  .login {
    margin-left: 50px;
  }
</style>