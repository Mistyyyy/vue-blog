import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    USER_TOKEN: '',
    loginStatus: false,
    userInfo: ''
  },
  mutations: {
    // 改变登录状态
    changeStatus: state => {
      state.loginStatus = !state.loginStatus
    },
    // 存储用户的token
    SET_TOKEN: (state, redirect) => {
      state.USER_TOKEN = redirect
    },
    // 存储用户的userInfo
    saveUserInfo: (state, id) => {
      state.userInfo = id
    }
  }
})
export default store
