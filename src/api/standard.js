/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-03-24 16:51:31
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const src = '/reservoir-omm/web'

export function addStandard(data) {
  return request({
    url: src + '/omaintainstandardinfo/addMaintain',
    method: 'post',
    data
  })
}

export function deleteStandard(id) {

    return request({
      url: src + `/omaintainstandardinfo/deleteMaintain`,
      method: 'put',
      params: {
        id
      }
    })
}

export function getStandardList(data) {
    return request({
      url: src + '/omaintainstandardinfo/getAllMaintainList',
      method: 'get',
      params: {
        pageNum: data.pageNum,
        pageSize: data.pageSize,
        typeId:data.typeId,
        count: data.count,
        orderField: data.orderField,
        orderType: data.orderType,
        query: data.query
      }
    })
}

export function getDetails(id) {
    return request({
      url: src + `/omaintainstandardinfo/getMaintainDetails`,
      method: 'get',
      params: {
        id
      }
    })
}

export function editStandard(data) {
    return request({
      url: src + `/omaintainstandardinfo/updateMaintain`,
      method: 'put',
      data
    })
}

//获取标准分类树
export function getStandardTree(data) {
  return request({
    url: src + '/omaintaindatatype/getMaintainTypeTree',
    method: 'get',
    params: {
      query: data.query
    }
  })
}

// 添加标准分类树节点
export function addStandardTree(data) {
  return request({
    url: src + '/omaintaindatatype/addMaintenanceType',
    method: 'post',
    data
  })
}
// 删除树节点
export function deleteStandardTree(id) {

  return request({
    url: src + `/omaintaindatatype/deleteMaintainData`,
    method: 'put',
    params: {
      id
    }
  })
}

// 删除文件

export function deleteStandardFile(id) {

  return request({
    url: src + `/omaintainstandardinfo/deleteMaintainFile`,
    method: 'delete',
    params: {
      id
    }
  })
}

