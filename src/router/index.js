import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Nav from '../views/nav.vue'
import Orders from '../components/orders.vue'
import Deliver from '../components/deliver.vue'
import Accountset from '../components/accountset.vue'
import Id from '../views/id.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/deliver',
    name: 'Deliver',
    component: Deliver,
  },
  {
    path: '/accountset',
    name: 'Accountset',
    component: Accountset,
  },
  {
    path: '/id',
    name: 'Id',
    component: Id,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
