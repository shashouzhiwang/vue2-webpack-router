import * as mutationsType from './mutations-type'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

export default { 
	mutations: {
        user_sign_in: (state, user) => {
            sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        user_sign_out: (state) => {
            sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        },
        http_service: (state, option){

        }
    }
}  