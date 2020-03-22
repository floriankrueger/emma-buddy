import Vue from "vue"

import VueRouter from "vue-router"

import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from "./App.vue"
import routes from "./routes"
import { store } from "./store.js"
import { startUpdatingBuddies, fetchBlogPosts, fetchChatMessages } from "./firebaseActions"
const fb = require("./firebaseConfig.js")

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = new VueRouter({ routes })

if (router.currentRoute.path === '/login') {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.isAnonymous) {
    fb.signOut()
  } else {
    router.push('/')
  }
} else {
  fb.signInAnonymously()
}

let app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})

fetchBlogPosts()
fetchChatMessages()

fb.auth.onAuthStateChanged(user => {
  const currentUser = app.$store.state.currentUser
  
  app.$store.commit('setCurrentUser', user)

  if (currentUser && user) {
    if (currentUser.isAnonymous && !user.isAnonymous) {
      router.push('/chats')
    } else {
      startUpdatingBuddies()
    }
  } else {
    startUpdatingBuddies()
  }
})
