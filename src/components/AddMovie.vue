<template>
    <div>
        <h2>Add Movie</h2>
        <form @submit.prevent="addMovie">
            <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
        <div class="form-group row">
            <label for="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
            <input v-model="title" type="text" class="form-control"  placeholder="Title">
            </div>
           
        </div>
        <div class="form-group row">
             <label for="genre" class="col-sm-2 col-form-label">Genre</label>
            <div class="col-sm-10">
            <input v-model="genre" type="text" class="form-control"  placeholder="Genre">
            </div>
            <label for="duration" class="col-sm-2 col-form-label">Duration</label>
            <div class="col-sm-10">
            <input v-model.number="duration" type="number" class="form-control"  placeholder="duration">
            </div>
            <label for="director" class="col-sm-2 col-form-label">Director</label>
            <div class="col-sm-10">
            <input v-model="director" type="text" class="form-control"  placeholder="director">
            </div>
            <label for="releaseDate" class="col-sm-2 col-form-label">Release Date</label>
            <div class="col-sm-10">
            <input v-model="releaseDate" type="date" class="form-control"  placeholder="releaseDate">
            </div>
            <label for="imageUrl" class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">
            <input v-model="imageUrl" type="text" class="form-control"  placeholder="imageUrl">
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
                
                    title: '',
                    duration: '',
                    director: '',
                    genre: '',
                    imageUrl: '',
                    releaseDate: '',
                    errors: [],
                    
            }
    },

    methods: {
        addMovie() {
            this.errors = [];

            if(!this.title) {
                this.errors.push('Title is required.');
            }

             if(!this.duration) {
                this.errors.push('duration is required.');
            }

             if(!this.director ) {
                this.errors.push('director is required.');
            }

             if(!this.genre) {
                this.errors.push('genre is required.');
            }

             if(!this.imageUrl) {
                this.errors.push('imageUrl is required.');
            }

             if(!this.releaseDate) {
                this.errors.push('releaseDate is required.');
            }

            if (!this.errors.length) {
                const data = {
                    title: this.title,
                    director: this.director,
                    duration: this.duration,
                    imageUrl: this.imageUrl,
                    releaseDate: this.releaseDate,
                    genre: this.genre
                };
                movies.add(data)
                this.$router.push('/movies')

            }
            
        },
    }

}
</script>

<style scoped>

</style>