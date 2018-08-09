/*
* 引入这个文件主要有几个功能点,首先，设置axios实例的全局环境的配置
* 在页面刷新的时候，检查cookie是否有用户信息，如果有则设置store仓库的token信息，同时改变登录状态
* 默认设置的cookie名字就叫做userToken
* 如果没有cookie信息，则不会改变任何状态
*/
import store from './store'
import { getStorage } from './cookie/operateCookie'

// 读取localStorage里的变量
let userToken = getStorage('userToken')
let uid = getStorage('uid')
if (userToken && uid) {
  store.commit('SET_TOKEN', userToken)
  store.commit('saveUserInfo', uid)
  store.commit('changeStatus')
}
