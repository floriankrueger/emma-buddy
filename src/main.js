import Vue from 'vue'

import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import * as firebase from 'firebase/app'
import 'firebase/auth'

import App from './App.vue'
import routes from './routes';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
  projectId: process.env.FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_APP_ID
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app = firebase.app()
let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function')
console.log(`Firebase SDK loaded with ${features.join(', ')}`)

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');