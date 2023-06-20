import { _message } from '@/utils/elementConfig'
import { Message } from 'element-ui'

export const init_credit = () => {
  return new Promise((resolve, reject) => {
    if (!window.CryptoKit) {
      const name = navigator.userAgent.indexOf('Firefox') > -1 ? 'Firefox' : navigator.userAgent.indexOf('Chrome') > -1 ? 'Chrome' : null
      if (!name) {
        Message({
          message: '请使用Chrome浏览器，火狐浏览器或360浏览器极速模式登录！',
          type: 'error',
          ..._message
        })
        return
      }
      // eslint-disable-next-line
      window.CryptoKit = new nmCryptokit(name)
    }
    window.CryptoKit.init().then(() => {
      return window.CryptoKit.getExtensionVersion()
    }).then(() => {
      return window.CryptoKit.getHostVersion()
    }).then(resolve).catch((e) => {
      if (e.errorcode === 2) {
        Message({
          type: "error",
          message: "未检测到插件，请返回登录页安装！",
          ..._message,
        });
      }
      reject(e)
    })
  })
}
