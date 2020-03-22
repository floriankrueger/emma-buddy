import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        buddies: [],
        blogPosts: [],
        chatMessages: []
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
        storeBlogPosts(state, val) {
            state.blogPosts = val
        },
        storeChatMessages(state, val) {
            state.chatMessages = val
        }
    }
})