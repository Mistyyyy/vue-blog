import { $axios } from './createInstance'
import axios from 'axios'
export function request (data) {
  return new Promise((resolve, reject) => {
    $axios(data)
      .then((response) => {
        let responseObj = {}
        let receiveDate = response.data
        resolve(Object.assign(responseObj, {code: receiveDate.code}, {message: receiveDate.message}, {data: receiveDate.data}))
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 合并请求的处理 使用rest参数
// 支持任意多个请求的任意请求方式的合并请求
// 返回一个包含请求结果的对象的数组
export function allRequest (...requestArray) {
  requestArray.forEach((element, index) => {
    requestArray[index] = $axios({method: element.method, url: element.url})
  })
  return new Promise((resolve, reject) => {
    axios.all(requestArray)
      .then(axios.spread((...response) => {
        response.forEach((element, index) => {
          response[index] = Object.assign({}, {code: element.data.code}, {message: element.data.message}, {data: element.data.data})
        })
        resolve(response)
      }))
      .catch(...error => {
        console.log(error)
      })
  })
}
