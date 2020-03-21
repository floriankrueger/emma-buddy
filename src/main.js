import Vue from "vue"

import VueRouter from "vue-router"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from "./App.vue"
import routes from "./routes"
import { store } from "./store.js"
const fb = require("./firebaseConfig.js")

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = new VueRouter({ routes })

let app;
fb.auth.onAuthStateChanged(user => {
  console.log(`user ${user.isAnonymous}`)
  if (!app) {
    app = new Vue({
      el: "#app",
      router,
      store,
      render: h => h(App)
    })
  }
})
