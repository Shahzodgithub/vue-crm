import { createRouter, createWebHistory } from 'vue-router';
import PageList from '@/components/PageList.vue';
import PageForm from '@/components/PageForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageList,
  },
  {
    path: '/page/:slug?',
    name: 'page',
    component: PageForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
