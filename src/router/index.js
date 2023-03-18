import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Counter.vue';
import NotFound from '../views/Notfound.vue'; 
import HomeApp from '../views/HomeApp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp,
  }, 
  {
    path:'/counter',
    name: 'home',
    component:Home
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
