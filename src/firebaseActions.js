import { store } from "./store.js"
const fb = require('./firebaseConfig.js')

const startUpdatingBuddies = () => {
    var buddiesRef = fb.db.ref('buddies')
    buddiesRef.on('value', function(snapshot) {
        console.log(`${JSON.stringify(snapshot.val())}`)
        store.commit('updateBuddies', Object.keys(snapshot.val()).map((key) => {
            console.log(`${key} -> ${snapshot.val()[key]}`)
            const element = snapshot.val()[key]
            return {
                bid: element.bid,
                name: element.name,
                standort: element.standort
            }
        }))
    })
}
const fetchBlogPosts = () => {
    var postsRef = fb.db.ref('blog')
    postsRef.on('value', function(snapshot) {
        console.log(`${JSON.stringify(snapshot.val())}`)
        store.commit('storeBlogPosts', Object.keys(snapshot.val()).map((key) => {
            console.log(`${key} -> ${snapshot.val()[key]}`)
            const element = snapshot.val()[key]
            return {
                id: element.id,
                titel: element.titel,
                text: element.text
            }
        }))
    })
}

export {
    startUpdatingBuddies,
    fetchBlogPosts
}