import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7488b0e4 = () => interopDefault(import('..\\pages\\invest.vue' /* webpackChunkName: "pages/invest" */))
const _77b04fb8 = () => interopDefault(import('..\\pages\\lend\\index.vue' /* webpackChunkName: "pages/lend/index" */))
const _9050290c = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _501b6bc8 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _4d1e6fba = () => interopDefault(import('..\\pages\\user\\account.vue' /* webpackChunkName: "pages/user/account" */))
const _33670703 = () => interopDefault(import('..\\pages\\welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _43c821e6 = () => interopDefault(import('..\\pages\\lend\\lend.vue' /* webpackChunkName: "pages/lend/lend" */))
const _01674ab3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/invest",
    component: _7488b0e4,
    name: "invest"
  }, {
    path: "/lend",
    component: _77b04fb8,
    name: "lend"
  }, {
    path: "/user",
    component: _9050290c,
    children: [{
      path: "",
      component: _501b6bc8,
      name: "user"
    }, {
      path: "account",
      component: _4d1e6fba,
      name: "user-account"
    }]
  }, {
    path: "/welcome",
    component: _33670703,
    name: "welcome"
  }, {
    path: "/lend/lend",
    component: _43c821e6,
    name: "lend-lend"
  }, {
    path: "/",
    component: _01674ab3,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
