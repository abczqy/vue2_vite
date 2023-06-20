/*
 * @Author: L
 * @Date: 2022-09-23 09:17:10
 * @LastEditTime: 2022-10-08 15:51:46
 * @LastEditors: Do not edit
 * @Description: nfc管理
 */
import request from '@/utils/request'
const temp = '/management-service/web'

//获取nfc分页
export function getNfc(data) {
    return request({
      url: temp + `/nfc/manage/list`,
      method: 'get',
      params: {
        pageNum: data.pageNum,
        pageSize: data.pageSize,
        count: data.count,
        name: data.name,
        orderType: data.orderType,
        orderField: data.orderField,
        reservoirId: data.reservoirId
      }
    })
  }

// 获取nfc列表不分页
export function getNfcSelect(id='') {
    return request({
        url: temp + '/nfc/manage/list/nopage',
        method: 'get',
        params: {
            reservoirId: id
        }
    })
}

// 添加nfc点位
export function addNfc(data) {
    return request({
        url: temp + '/nfc/manage/add',
        method: 'post',
        data
    })
}

// 修改nfc点位
export function editNfc(data) {
    return request({
        url: temp + '/nfc/manage/update',
        method: 'put',
        data
    })
}

// 删除nfc点位
export function deleteNfc(id) {
    return request({
        url: temp + '/nfc/manage/delete',
        method: 'put',
        params: {
            id
        }
    })
}

// 获取nfc详情
export function getNfcDetail(id) {
    return request({
        url: temp + '/nfc/manage/list/info',
        method: 'get',
        params: {
            id
        }
    })
}