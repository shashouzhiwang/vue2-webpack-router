export default {
    actions: {
        user_sign_in: ({commit}, user) => {
            commit('user_sign_in', user)
        },
        user_sign_out: ({commit}) => {
            commit('user_sign_out')
        }
    }
}  