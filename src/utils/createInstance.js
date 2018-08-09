import axios from 'axios'

let $axios = axios.create({
  baseURL: 'http://blog.app/api',
  timeout: 3000
})

export { $axios }
