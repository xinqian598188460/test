import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0}
  },
  routes
})

export default router
