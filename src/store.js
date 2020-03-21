import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUser: null,
        buddies: []
    },
    actions: {
        // updateBuddies({ commit, state }) {
            
        // }
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val
        }
    }
})