/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-05-11 14:06:35
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/reservoir-omm/web'

export function addPlan(data) {
  return request({
    url: temp + '/patrolplan/addPlan',
    method: 'post',
    data
  })
}

export function deletePlan(id) {

    return request({
      url: temp + `/patrolplan/deletePlan/`,
      method: 'put',
      params: {
        id
      }
    })
}

export function getPlanList(data) {
    return request({
      url: temp + '/patrolplan/getPlanList',
      method: 'get',
      params: {
        pageNum: data.pageNum,
        pageSize: data.pageSize,
        name: data.name,
        patrolTypeId: data.patrolTypeId,
        // riverSystemId: data.riverSystemId,
        reservoirId: data.reservoirId,
        count: data.count,
        orderField: data.orderField,
        orderType: data.orderType,
      }
    })
}

export function getDetails(id) {
    return request({
      url: temp + `/patrolplan/getDetails/`,
      method: 'get',
      params: {
        id
      }
    })
}

export function editPlan(data) {
    return request({
      url: temp + `/patrolplan/updatePlan/`,
      method: 'put',
      data
    })
}

export function getAllPlanId() {
  return request({
    url: temp + `/patrolplan/getAllPlanId`,
    method: 'get'
  })
}

// 删除文件
export function deletePlanFile(id) {

  return request({
    url: temp + `/patrolplan/deletePlanFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}



