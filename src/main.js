import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration

createApp(App).use(router).mount('#app');
const app = createApp(App);

app.use(router); // Use the router
app.mount('#app');
