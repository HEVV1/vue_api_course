import {createRouter, createWebHistory} from 'vue-router';
import FormPage from '@/components/FormPage';

const routes = [
  {
    path: '/form',
    component: FormPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
