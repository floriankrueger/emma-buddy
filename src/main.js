import Vue from "vue"

import VueRouter from "vue-router"

import { BootstrapVue, IconsPlugin, FormRadioPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from "./App.vue"
import routes from "./routes"
import { store } from "./store.js"
import { startUpdatingBuddies } from "./firebaseActions"
const fb = require("./firebaseConfig.js")

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = new VueRouter({ routes })

let app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})

fb.auth.onAuthStateChanged(user => {
  app.$store.commit('setCurrentUser', user)
  startUpdatingBuddies()
})
