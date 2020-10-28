import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMovies from '../views/Movies.vue'
import AddMovie from '../components/AddMovie'
import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movies',
    meta: { isAuthRequired: false }
  },
  {
    path: '/movies',
    name: 'app-movies',
    component: AppMovies
  },
  {
    path: '/add-movie',
    name: 'add-movie',
    component: AddMovie,
    meta: { isAuthRequired: false }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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
