import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SimpleForm from '../views/SimpleView.vue';  // Import the SimpleForm component

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/simpleform',  // Define the path for the SimpleForm
      name: 'simpleform',
      component: SimpleForm  // Set the component to be rendered
    }
  ]
});

export default router;
