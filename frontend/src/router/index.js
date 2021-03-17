import Vue from 'vue'
import Router from 'vue-router'
import adminRoutes from './admin'
import userRoutes from './user'
import notFoundScreen from '@/views/404'
import welcomeScreen from '@/components/ExampleComponent'
Vue.use(Router)

const routesWithPrefix = (prefix, routes) => {
  return routes.map(route => {
    route.path = `${prefix}${route.path}`
    if (prefix.length) {
      route.name = `${prefix.replace('/', '')}.${route.name}`
    }
    return route
  })
}

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    ...routesWithPrefix('/admin', adminRoutes),
    ...routesWithPrefix('', userRoutes),
    {
      path: '*',
      name: 'page-not-found',
      component: notFoundScreen
    },
    {
      path: '/welcomeabc',
      name: 'welcome',
      component: welcomeScreen
    }
  ]
})

export default router
