import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Resume from '../views/Resume.vue'
import Contact from "../views/Contact";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills

  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume

  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
