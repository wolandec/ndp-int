import './css/index.css'
import { routes } from './routes'
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 5. Create and mount the root instance.
const app = createApp(App)
app.use(router)
app.mount('#app')
