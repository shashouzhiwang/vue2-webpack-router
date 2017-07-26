import Vue from 'vue'
import * as mutationType from './mutation-type'

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    mutations: {
        [mutationType.USER_SIGNIN](state, user) {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [mutationType.USER_SIGNOUT](state) {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [mutationType.USER_SIGNIN]({commit}, user) {
            commit(mutationType.USER_SIGNIN, user)
        },
        [mutationType.USER_SIGNOUT]({commit}) {
            commit(mutationType.USER_SIGNOUT)
        }
    }
}  