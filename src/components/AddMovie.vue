<template>
    <div>
        <h2>Add Movie</h2>
        <form @submit.prevent="addMovie">
        <div class="form-group row">
            <label for="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
            <input v-model="movie.title" type="text" class="form-control"  placeholder="Title">
            </div>
           
        </div>
        <div class="form-group row">
             <label for="genre" class="col-sm-2 col-form-label">Genre</label>
            <div class="col-sm-10">
            <input v-model="movie.genre" type="text" class="form-control"  placeholder="Genre">
            </div>
            <label for="duration" class="col-sm-2 col-form-label">Duration</label>
            <div class="col-sm-10">
            <input v-model="movie.duration" type="text" class="form-control"  placeholder="duration">
            </div>
            <label for="director" class="col-sm-2 col-form-label">Director</label>
            <div class="col-sm-10">
            <input v-model="movie.director" type="text" class="form-control"  placeholder="director">
            </div>
            <label for="releaseDate" class="col-sm-2 col-form-label">Release Date</label>
            <div class="col-sm-10">
            <input v-model="movie.releaseDate" type="date" class="form-control"  placeholder="releaseDate">
            </div>
            <label for="imageUrl" class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">
            <input v-model="movie.imageUrl" type="text" class="form-control"  placeholder="imageUrl">
            </div>
        </div>
        <button>Submit</button>
        </form>
    </div>
</template>

<script>
import {movies} from '../services/Movies'
export default {
    name: 'movies',

    data() {
        return {
                movie: {
                    title: '',
                    duration: '',
                    director: '',
                    genre: '',
                    imageUrl: '',
                    releaseDate: '',
                    }
            }
    },

    methods: {
        addMovie() {
            console.log(this.movie)
            movies.add(this.movie)
            this.$router.push('/movies')
        },
    }

}
</script>

<style scoped>

</style>