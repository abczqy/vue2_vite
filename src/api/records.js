/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-03-24 15:59:32
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/reservoir-omm/web'

export function upRecord(data) {
  return request({
    url: temp + `/patrolrecord/updateXjRwInfo/`,
    method: 'put',
    data
  })
}

export function deleteRecord(id) {
    return request({
      url: temp + `/patrolrecord/deletePatrolRecord/`,
      method: 'put',
      params: {
        id
      }
    })
}

export function getRecordsList(data) {
    return request({
      url: temp + '/patrolrecord/page',
      method: 'get',
      params: {
        pageNum: data.pageNum,
        pageSize: data.pageSize,
        name: data.name,
        patrolType: data.patrolType,
        // riverSystemId: data.riverSystemId,
        reservoirId: data.reservoirId,
        count: data.count,
        orderField: data.orderField,
        orderType: data.orderType,
        status:data.status,
        userId:data.userId
      }
    })
}

export function getDetails(data) {
    return request({
      url: temp + `/patrolrecord/getXjRwInfo`,
      method: 'get',
      params: {
        id: data
      }
    })
}

export function closeRecord(id) {
    return request({
      url: temp + `/patrolrecord/closePatrolRecord/`,
      method: 'put',
      params: {
        id
      }
    })
}

// 删除文件

export function deleteRecordFile(id) {

  return request({
    url: temp + `/patrolrecord/deleteRecordFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}

