/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-03-24 16:02:32
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/reservoir-omm/web'

export function addProject(data) {
  return request({
    url: temp + '/oprojectdatainfo/addProjectData',
    method: 'post',
    data
  })
}

export function deleteProject(id) {

    return request({
      url: temp + `/oprojectdatainfo/deleteProjectData/`,
      method: 'put',
      params: {
        id
      }
    })
}

export function getProjectList(data) {
    return request({
      url: temp + '/oprojectdatainfo/getAllProjectDataList',
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
      url: temp + `/oprojectdatainfo/getDataDetails/`,
      method: 'get',
      params: {
        id
      }
    })
}

export function editProject(data) {
    return request({
      url: temp + `/oprojectdatainfo/updateProjectData`,
      method: 'put',
      data
    })
}

//获取项目资料树
export function getProjectTree(data) {
  return request({
    url: temp + '/omaintaindatatype/getDataTypeTree',
    method: 'get',
    params: {
      query: data.query
    }
  })
}

// 添加项目树节点
export function addProjectTree(data) {
  return request({
    url: temp + '/omaintaindatatype/addDataType',
    method: 'post',
    data
  })
}
// 删除树节点
export function deleteProjectTree(id) {

  return request({
    url: temp + `/omaintaindatatype/deleteProjectData/`,
    method: 'put',
    params: {
      id
    }
  })
}

// 删除文件

export function deleteProjectFile(id) {

  return request({
    url: temp + `/oprojectdatainfo/deleteProjectFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}


