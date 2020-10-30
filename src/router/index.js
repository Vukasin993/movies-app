import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../views/Movies.vue'
import AddMovie from '../components/AddMovie'
import Login from '../components/Login'
import Register from '../components/Register'
import SingleMovie from '../components/SingleMovie'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies',
    meta: { isAuthRequired: true }
  },
  {
    path: '/movies',
    name: 'app-movies',
    component: AppMovies,
    meta: { isAuthRequired: true }
  },
  {
    path: '/add-movie',
    name: 'add-movie',
    component: AddMovie,
    meta: { isAuthRequired: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/movies/:id',
    name: 'single-movie',
    component: SingleMovie
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach(authGuard);
// router.beforeEach(guestGuard);
router.beforeEach(function authGuard(to, from, next) {
  console.log('GLOBAL GUARD', { meta: to.meta.isAuthRequired });
  if (!to.meta.isAuthRequired) {
    console.log('not required');
    next();
  } else if (!localStorage.getItem('token')) {
    console.log('REDIRECTION');
    next('/login');
  } else {
    console.log('pass');
    next();
  }
});
router.beforeEach((to, from, next) => {
  console.log('GLOBAL GUARD 2');
  next();
});

export default router
