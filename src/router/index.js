import {
  createRouter,
  createWebHistory
} from 'vue-router'
import SingleArtwork from '../views/SingleArtwork.vue'
import Home from '../views/Home.vue'







const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artwork/:id',
    name: 'SingleArtwork',
    component: SingleArtwork
  },
  {
    path: '/publishartwork',
    name: 'PublishArtwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "connection" */ '../views/user/PublishArtwork.vue')
  },
  {
    path: '/editartwork',
    name: 'EditArtwork',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "connection" */ '../views/user/EditArtwork.vue')
  },
  {
    path: '/artist/:id',
    name: 'Artist',

    component: () => import( /*   webpackChunkName: "connection" */ '../views/ArtistProfile.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "connection" */ '../views/Registration.vue')
  },
  {
    path: '/connection',
    name: 'Connection',

    component: () => import(  '../views/ConnectionUser.vue')
  },
  {
    path: '/user/:id',
    name: 'UserAccount',

    component: () => import( /* webpackChunkName: "connection" */ '../views/UserProfile.vue')
  }

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router