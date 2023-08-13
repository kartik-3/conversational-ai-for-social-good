import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
// import ProjectsView from '../views/ProjectsView.vue'
import PublicationsView from '../views/PublicationsView.vue'
import BriefingsView from '../views/BriefingsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/people',
    name: 'People',
    component: PeopleView
  },
  // {
  //   path: '/projects',
  //   name: 'Projects',
  //   component: ProjectsView
  // },
  {
    path: '/publications',
    name: 'Publications',
    component: PublicationsView
  },{
    path: '/briefings',
    name: 'Briefings',
    component: BriefingsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
