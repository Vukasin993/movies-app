import Vue from 'vue'
import {store} from './vuex/store'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueRouter from 'vue-router'
import router from './router'
// import AppMovies from './components/AppMovies'
// import AddMovie from './components/AddMovie'


// const routes = [
//   { path: '/movies', component: AppMovies, meta: { isAuthRequired: false } },
//   {
//     path: '/add-movie',
//     component: AddMovie,
//     meta: { isAuthRequired: true },
//     beforeEnter: (to, from, next) => {
//       console.log('ROUTE GUARD');
//       next();
//     },
//   },
//   { path: '/', redirect: '/movies' },
// ];
// const router = new VueRouter({
//   routes, // short for `routes: routes`
// });


// Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
