/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumber(str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
// 验证11位手机号 1开头 第二位 3-9 之后每一位0-9
export function validPhone(phone) {
  // const reg = /^\d{11}$/;
  const reg = /^[1][3-9][\d]{9}$/;
  return reg.test(phone)
}
// 验证行政区编码
export function validRegionCode(regionCode) {
  const reg = /^\d{12}$/
  return reg.test(regionCode)
}
// 验证精度纬度
export function validLongitudeAndLatitude(value) {
  if(!/，/.test(value)){
    return false
  }
  const arr = value.split("，");
  if (arr.length !== 2) return false;
  const reg = /^\d+\.\d+$/;
  return reg.test(arr[0]) && reg.test(arr[1])
}
// 验证18位身份证
export function validIdCard(value){
  const reg = /^\d{17}[0-9Xx]$/;
  return reg.test(value)
}

// 两位大写字母 
export function validCharacter(value){
  const reg = /^[A-Z]{2}$/
  return reg.test(value)
}
// ip + 端口号 
export function validIpPort(value){
  const reg = /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}(\:([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])){0,1}$/
  return reg.test(value)
}
// 验证 2-40整数
export function validPointNum(value){
  const reg = /^([2-9]|([1-3][0-9])|^40$)$/
  return reg.test(value)
}
