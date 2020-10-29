<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form class="form-horizontal" @submit.prevent="onSubmit">
                <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
              <div class="form-group">
                <label for="name" class="cols-sm-2 control-label">Name</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="name"
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="cols-sm-2 control-label">Your Email</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="email"
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="cols-sm-2 control-label">Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <div></div>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="password_confirmation" class="cols-sm-2 control-label">Confirm Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="password_confirmation"
                      type="password"
                      class="form-control"
                      name="password_confirmation"
                      id="password_confirmation"
                      required
                    />
                  </div>
                </div>
              </div>
              
                <br/>
              <div v-if="error" class="alert alert-danger" role="alert">Error</div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block login-button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        errors: []
    };
  },
  computed: {
    ...mapGetters({
      error: "auth/errors"
    })
  },
  methods: {
    ...mapActions({
      register: "auth/register"
    }),

    onSubmit() {

        this.errors = [];

            if(!this.name) {
                this.errors.push('name is required.');
            }

             if(!this.email) {
                this.errors.push('email is required.');
            }

             if(!this.password ) {
                this.errors.push('password is required.');
            }

             if(!this.password_confirmation) {
                this.errors.push('password_confirmation is required.');
            }

             if(this.password !== this.password_confirmation) {
                     this.errors.push('Passwords are not matching.');
                }

            if (!this.errors.length) {
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                };
                this.register(user);
                this.$router.push('/login')
                
            } else {
                console.log('Bad register');
            }
            
        },



    //   this.register(this.form).then(() => {
    //     if (this.error === null)
    //       this.$router.push({
    //         name: "login"
    //       });
    //   });



    //   this.register({
    //       name: this.name,
    //       email: this.email,
    //       password: this.password
    //   }).then(() => {
    //     if (this.error === null)
    //       this.$router.push('/login');
    //   });

    
  }
};
</script>

<style lang="scss" scoped>
</style>