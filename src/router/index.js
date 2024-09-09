import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/user/HomeTab.vue'; // Adjust the path according to your structure
import About from '@/components/user/ServicesBar.vue'; // Adjust the path according to your structure
import Contact from '@/components/user/ContactUs.vue'; // Adjust the path according to your structure

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/servicesbar',
    name: 'Services',
    component: About
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: Contact
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
