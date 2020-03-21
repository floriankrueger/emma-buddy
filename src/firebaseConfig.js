import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_APP_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_APP_ID
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const currentUser = auth.currentUser

let app = firebase.app()
let features = ["auth", "database", "messaging", "storage"].filter(
    feature => typeof app[feature] === "function"
)
console.log(`Firebase SDK loaded with ${features.join(", ")}`)

firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        console.error(`${errorMessage} (${errorCode})`)
    })

export {
    auth,
    currentUser
}
