/*
 * @Author: L
 * @Date: 2022-04-19 17:12:57
 * @LastEditTime: 2022-05-07 16:00:28
 * @LastEditors: Do not edit
 * @Description: 加密
 */

import CryptoJS from "crypto-js";

const Key = CryptoJS.enc.Utf8.parse('11011912012315SW')
const Iv = CryptoJS.enc.Utf8.parse('11011912012315SW')

export default {
  // 加密方法
  encrypt (word, keyStr, ivStr){
    let key = Key
    let iv = Iv

    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
      iv = CryptoJS.enc.Utf8.parse(ivStr)
    }

    let srcs = CryptoJS.enc.Utf8.parse(word)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })

    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  },

  //解密方法
  decrypt (word, keyStr, ivStr){
    let key = Key
    let iv = Iv

    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
      iv = CryptoJS.enc.Utf8.parse(ivStr)
    }

    let base64 = CryptoJS.enc.Base64.parse(word)
    let src = CryptoJS.enc.Base64.stringify(base64)

    let decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    
    let decryptStr = decrypt.toString(CryptoJS.enc.Utf8)

    return decryptStr.toString()
  }
}