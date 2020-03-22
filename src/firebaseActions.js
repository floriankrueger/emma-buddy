import { store } from "./store.js"
const fb = require('./firebaseConfig.js')

const startUpdatingBuddies = () => {
    var buddiesRef = fb.db.ref('buddies').orderByChild('status');
    buddiesRef.on('value', function (snapshot) {
        store.commit('updateBuddies', Object.keys(snapshot.val())
            .map((key) => {
                const element = snapshot.val()[key]
                return {
                    bid: element.bid,
                    name: element.name,
                    avatarRef: element.avatar && `buddies/${element.bid}/${element.avatar}`,
                    einrichtung: element.einrichtung,
                    standort: element.standort,
                    sprachen: Object.keys(element.sprachen),
                    geschlecht: element.geschlecht,
                    status: function () {
                        if (element.online && element.busy) {
                            return "busy"
                        } else if (element.online) {
                            return "online"
                        } else {
                            return "offline"
                        }
                    },
                    taetigkeit: element.taetigkeit
                }
            }))

    })
}

const startUpdatingUserChats = ({ uid }) => {
    var userChatRef = fb.db.ref(`users/${uid}/chats`)
    userChatRef.on('value', function (snapshot) {
        store.commit('updateChats', Object.keys(snapshot.val())
            .map((key) => {
                const element = snapshot.val()[key]
                return {
                    cid: element.cid,
                    bid: element.bid,
                    uid: element.uid,
                }
            }))
    })
}

const startUpdatingBuddyChats = ({ bid }) => {
    var userChatRef = fb.db.ref(`buddies/${bid}/chats`)
    userChatRef.on('value', function (snapshot) {
        store.commit('updateChats', Object.keys(snapshot.val())
            .map((key) => {
                const element = snapshot.val()[key]
                return {
                    cid: element.cid,
                    bid: element.bid,
                    uid: element.uid,
                }
            }))
    })
}

const fetchBlogPosts = () => {
    var postsRef = fb.db.ref('blog')
    postsRef.on('value', function (snapshot) {
        store.commit('storeBlogPosts', Object.keys(snapshot.val()).map((key) => {
            const element = snapshot.val()[key]
            return {
                id: element.id,
                titel: element.titel,
                text: element.text
            }
        }))
    })
}

const createChat = ({ bid, uid }) => {
    const newChat = fb.db.ref('chats').push()
    newChat.set({
        bid,
        uid,
        messages: {}
    })
    const cid = newChat.key
    const newUserChatRef = fb.db.ref(`users/${uid}/chats`).push()
    let chatNode = {
        cid,
        bid,
        uid
    }
    newUserChatRef.set(chatNode)
    const newBuddyChatRef = fb.db.ref(`buddies/${bid}/chats`).push()
    newBuddyChatRef.set(chatNode)
    return cid
}

export {
    startUpdatingBuddies,
    startUpdatingUserChats,
    startUpdatingBuddyChats,
    fetchBlogPosts,
    createChat
}