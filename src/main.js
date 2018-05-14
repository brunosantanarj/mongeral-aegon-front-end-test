import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index.js'

import App from './App.vue'
import Products from './components/Products.vue'

Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: Products }
]

// Register routes
const router = new VueRouter({
  routes
})

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
