<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="submit">
             <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script>
// import {authService} from '../services/AuthService'
import {mapActions} from 'vuex'

export default {
    name: 'Login',

    data() {
        return {
            email: "",
            password: "",
            errors: []
        };
    },

    methods: {
        ...mapActions({
            login: 'auth/login'
        }),

        submit() {
               this.login({
                    email: this.email,
                    password: this.password
                }).then(() => {
                    if(this.error === null)
                    this.$router.push({
                    name: "movies"
                    });
                });
            }
  
         
            // this.login(this.email, this.password);
            // console.log(this.email, this.password)
            //  authService.login(this.email, this.password)
        //         this.$router.push('/movies')
        
        // login() {
        //     this.errors = [];

        //     if (!this.email) {
        //         this.errors.push("Email is required");
        //     }
        //      if (!this.password) {
        //         this.errors.push("Password is required");
        //     }

        //     if (!this.errors.length) {
        //         const data = {
        //             email: this.email,
        //             password: this.password
        //         };

        //         authService.login(data.email, data.password)
        //         this.$router.push('/movies')
        //     }
        // }
    }
}
</script>

<style scoped>

</style>