import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

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

const db = firebase.database()
const auth = firebase.auth()
const storage = firebase.storage()
const currentUser = auth.currentUser

let app = firebase.app()
let features = ["auth", "database", "messaging", "storage"].filter(
    feature => typeof app[feature] === "function"
)
console.log(`Firebase SDK loaded with ${features.join(", ")}`)

const signInAnonymously = function() {
    if (auth.currentUser) { return }
    firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message
            console.error(`anonymous login failed: ${errorMessage} (${errorCode})`)
        })
}

const signOut = function() {
    if (!auth.currentUser) { return }
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            var errorCode = error.code
            var errorMessage = error.message
            console.error(`logout failed: ${errorMessage} (${errorCode})`)
        })
}

export {
    firebase,
    db,
    auth,
    storage,
    currentUser,
    signInAnonymously,
    signOut
}
