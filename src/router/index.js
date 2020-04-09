import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue';
import CityList from '../views/CityList.vue';
import Search from '../views/Search.vue';
import Movie from '../views/movie/Movie.vue';
import HotShowing from '../views/movie/hotshowing/HotShowing.vue';
import CommingSoon from '../views/movie/commingsoon/CommingSoon.vue';
import Cinema from '../views/cinema/Cinema.vue';
import Profile from '../views/profile/Profile.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index/movie/hotshowing'
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'movie',
        component: Movie,
        redirect: '/index/movie/hotshowing',
        children: [
          {
            path: 'hotshowing',
            component: HotShowing
          },
          {
            path: 'commingsoon',
            component: CommingSoon
          }
        ]
      },
      { path: 'cinema', component: Cinema },
      { path: 'profile', component: Profile },
    ]
  },
  {
    path: '/citylist',
    component: CityList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
