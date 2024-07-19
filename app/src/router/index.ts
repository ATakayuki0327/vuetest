import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SimpleForm from '../views/SimpleView.vue';
import ComponentItem from '../views/ComponentItemView.vue';
import UserProfile from '../views/UserProfileView.vue';

// Define the routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/simpleform',
    name: 'simpleform',
    component: SimpleForm
  },
  {
    path: '/componentItem',
    name: 'componentItem',
    component: ComponentItem
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  }
];

// Create the router instance with the `routes` array
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
