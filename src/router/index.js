import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/user/HomeTab.vue'; // Adjust the path according to your structure
import Services from '@/components/user/ServicesBar.vue'; // Adjust the path according to your structure
import ContactUs from '@/components/user/ContactUs.vue'; // Adjust the path according to your structure

const routes = [
  { path: '/home', component: Home },
  { path: '/services', component: Services },
  { path: '/contact', component: ContactUs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
