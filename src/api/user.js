/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-12-30 14:56:03
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
// const temp = '/reservoir-auth/web'
// const temp1 = '/reservoir-sm/web'
// const temp2 = '/reservoir-omm/web'
const temp = '/reservoir-auth/web'
const temp1 = '/reservoir-sm/web'
const temp2 = '/reservoir-omm/web'
// 门户-登陆校验
export function doorLogin(query) {
  return request({
    url: temp + '/login/get/access/token',
    method: 'get',
    params: query
  })
}
// 登录-账号
export function login(data) {
  return request({
    url: temp + '/login/userLogin',
    method: 'post',
    data
  })
}

//登录-短信
export function loginByText(data) {
  // console.log(data);
  return request({
    url: temp2 + '/sendSms/send/sms/verification/info',
    method: 'post',
    data
  })
}

//登录-短信-校验
export function loginCheckText(data) {
  return request({
    url: temp2 + '/sendSms/send/sms/check/verification',
    method: 'post',
    data
  })
}

//校验关联的手机号
export function checkPhoneNumber(data) {
  return request({
    url: temp + '/login/verification/phone',
    method: 'post',
    params: {
      phone: data.phone,
    }
  })
}

// cfca验证
export function checkCFCA(data) {
  // console.log(data);
  return request({
    url: temp + '/login/signature/verification',
    method: 'post',
    data
  })
}

//验证原密码
export function ValidationPass(data) {
  return request({
    url: temp + '/login/verification/password',
    method: 'post',
    data
  })
}

//修改用户密码 /sysUser/updatePassword

export function updatePass(data) {
  return request({
    url: temp + '/login/updatePassword',
    method: 'post',
    data
  })
}

//获取用户详情
export function getUserDetail(id) {
  return request({
    url: temp1 + '/sysUser/getSysUserInfo',
    method: 'get',
    params: {
      id
    }
  })
}

//修改用户资料
export function updateUser(data) {
  return request({
    url: temp + '/sysUser/updateUser',
    method: 'post',
    data
  })
}

//修改用户头像
export function updateprofilePhoto(data) {
  return request({
    url: temp1 + '/sysUser/update/headPhoto',
    method: 'post',
    data
  })
}



export function getUserList(query) {
  return request({
    url: temp + '/vue-element-admin/user/list',
    method: 'get',
    params: query
  })
}
export function getOrderPayinfo(token) {
  return request({
    url:temp +  '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}
export function logout() {
  return request({
    url: temp + '/vue-element-admin/user/logout',
    method: 'post'
  })
}
