import Vue from 'vue'
import * as mutationsType from './mutations-type'

export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {}
}  