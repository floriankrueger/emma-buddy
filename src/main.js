import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import * as firebase from 'firebase/app'
import 'firebase/auth'

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

Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');