import Vue from 'vue'
import Vuex from 'vuex'
import stateData from './stateData'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        stateData,
        mutations,
        actions 
    }
})