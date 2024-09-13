import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/user/HomeTab.vue';
import Services from '@/components/user/ServicesBar.vue';
import ContactUs from '@/components/user/ContactUs.vue';
import CheckStatus from '@/components/user/CheckStatus.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/services', component: Services },
  { path: '/contact', component: ContactUs },
  { path: '/checkstatus', component: CheckStatus }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
