import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        buddies: []
    },
    actions: {
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        },
        updateBuddies(state, val) {
            state.buddies = val
        }
    }
})