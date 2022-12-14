import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmDetail from '../views/FilmsDetail.vue'
import SerieDetail from '../views/SerieDetail.vue'
import FilmView from "../views/FilmView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/movies",
      name: "movies",
      component: FilmView,
    },
    {
      path: '/film/:id',
      name: 'FD',
      component: FilmDetail,
      props: true,
    },
    {
      path: '/serie/:id',
      name: 'Se',
      component: SerieDetail,
      props: true,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
