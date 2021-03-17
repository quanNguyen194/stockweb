import Vue from 'vue'
import VueRouter from 'vue-router'

import ExampleComponent from '@/components/ExampleComponent.vue'
import notFoundScreen from '@/views/404'

const routes = [
  { path: '/welcome',
    component: ExampleComponent
  }
]

const notfound = [
  {
    path: '*',
    component: notFoundScreen
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes,
  notfound
})

export default router
