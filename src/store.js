import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        buddies: [],
        chats: [],
        blogPosts: []
    },
    actions: {
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        updateBuddies(state, val) {
            state.buddies = val
        },
        updateChats(state, val) {
            state.chats = val
        },
        storeBlogPosts(state, val) {
            state.blogPosts = val
        }
    }
})