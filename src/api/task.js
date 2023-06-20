/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-03-24 18:07:41
 * @LastEditors: Do not edit
 * @Description: 巡检任务接口
 */
import request from '@/utils/request'
const temp = '/reservoir-omm/web'

export function addTask(data) {
  return request({
    url: temp + '/opatrolTask/insertXjRwInfo',
    method: 'post',
    data
  })
}

export function deleteTask(id) {
    return request({
      url: temp + `/opatrolTask/deletePatrolTask/`,
      method: 'put',
      params: {
        id
      }
    })
}

export function getTaskList(data) {
    return request({
      url: temp + '/opatrolTask/getPatrolTaskList',
      method: 'get',
      params: {
        pageNum: data.pageNum,
        pageSize: data.pageSize,
        name: data.name,
        patrolType: data.patrolType,
        reservoirId: data.reservoirId,
        count: data.count,
        orderField: data.orderField,
        orderType: data.orderType,
        patrolLabel: data.patrolLabel
      }
    })
}

export function getDetails(data) {
    return request({
      url: temp + `/opatrolTask/queryXjRwXqInfo`,
      method: 'get',
      params: {
        id: data.id,
        source:data.source
      }
    })
}

export function editTask(data) {
    return request({
      url: temp + `/opatrolTask/updateXjRwInfo`,
      method: 'post',
      data
    })
}

export function closeTask(id) {

  return request({
    url: temp + `/opatrolTask/closePatrolTask/`,
    method: 'put',
    params : {
      id
    }
  })
}

// 删除文件

export function deleteTaskFile(id) {

  return request({
    url: temp + `/opatrolTask/deleteTaskFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}

// 获取巡检人员 /role/getUserByRoleName

export function getInspection(roleName) {
  return request({
    url: temp + `/role/getUserByRoleName`,
    method: 'get',
    params: {
      roleName
    }
  })
}
