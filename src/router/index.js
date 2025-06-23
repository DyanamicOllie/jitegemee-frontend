import { createRouter, createWebHistory } from 'vue-router'
import Aboutus from '../components/Aboutus.vue'
import Apply from '../components/Apply.vue'
import Contactus from '../components/Contactus.vue'
import Courses from '../components/Courses.vue'
import Events from '../components/Events.vue'
import Homepage from '../components/Homepage.vue'
import Library from '../components/Library.vue'
import Login from '../components/Login.vue'
import Studentlife from '../components/Studentlife.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus,
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: Contactus,
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses,
    },{
      path: '/events',
      name: 'events',
      component: Events,
    },{
      path: '/',
      name: 'homepage',
      component: Homepage,
    },{
      path: '/library',
      name: 'library',
      component: Library,
    },{
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/studentlife',
      name: 'studentlife',
      component: Studentlife,
    },
    
  ],
})

export default router
