import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const Project = () => import('@/components/Project');
const About = () => import('@/components/About');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '*',
    redirect: { name: 'Home' }
  },

  {
    path: '/project/:projectId',
    name: 'Project',
    component: Project
  },
  {
    path: '/about',
    name:'About',
    component: About
  }
];

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

/*router.afterEach(() => {
  console.log('after each !')
});*/

export default router;
