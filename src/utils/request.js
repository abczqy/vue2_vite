/*
 * @Author: L
 * @Date: 2022-03-15 18:43:12
 * @LastEditTime: 2022-10-17 09:21:40
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
// import { getToken } from '@/utils/auth'
// create an axios instance
// axios.defaults.withCredentials=true;
const service = axios.create({
  baseURL: process.env.VUE_APP_APPLICATION_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 25000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // console.log(config.url);
    const specialUrl = config.url.indexOf('tianditu')
    if (config.url !== '/login/userLogin' && specialUrl === -1) {
      const token = sessionStorage.getItem('token')
      // let token = 'test'
      // 请求头携带token

      config.headers.token = token
    }
    return config

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    // return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
let box_flag = false
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // res.code=20000
    // if the custom code is not 20000, it is judged as an error.
    // console.log(res);
    // if (res.code !== 0) {
    //   // Message({
    //   //   message: res.message || 'Error',
    //   //   type: 'error',
    //   //   duration: 5 * 1000
    //   // })
    const codes = ['909090', '120120', '888888', '808080']
    const messageObj = {
      '909090': ['请点击重新登录按钮，重新登录', '身份失效', '重新登录'],
      // '454545': ['您没有权限访问，请联系管理员', '没有权限','确定'],
      '120120': ['请点击重新登录按钮，重新登录', '身份失效', '重新登录'],
      '888888': ['该账号已在其他地方登录，请重新登录', '异地登录', '重新登录'],
      // '080808': ['当前访问未授权，请联系管理员', '访问未授权','确定'],
      '808080': ['当前登录信息已经失效，重新登录', '禁止访问', '重新登录']
    }
    //
    if (!res.success) {
      if (codes.includes(res.code) && !box_flag) {
        const [content, title, buttonInfo] = messageObj[res.code]
        box_flag = true
        MessageBox.confirm(content, title, {
          confirmButtonText: buttonInfo,
          cancelButtonText: '取消',
          showCancelButton: false,
          showClose: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          type: 'warning'
        }).then(() => {
          box_flag = false
          // location.href = '/#/login'
          // router.replace('/login')
          top.location.href = '/#/login'
        })
      } else {
        box_flag = false
        if (res.code === '454545') {
          MessageBox.confirm('您没有权限访问，请联系管理员', '没有权限', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            showCancelButton: false,
            type: 'warning'
          }).then(() => {
          })
        }
      }
    }

    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
