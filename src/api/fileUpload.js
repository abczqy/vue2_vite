/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-04-09 10:53:53
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'

// 文件上传
export function uploadFile(data) {
  return request({
    url: '/fileUpload/fileUpload',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}


export function uploadMultiFile(data) {
    return request({
      url: '/fileUpload/multifileUpload',
      method: 'post',
      data
    })
  }

  // 文件下载
export function downloadFile(data) {
  
    return request({
      url: `/fileUpload/download`,
      method: 'get',
      params: {
        filePathUrl: data
      }
    })
}
//巡检方案文件删除

export function deletePlanFile(id) {
  
  return request({
    url: `/patrolplan/deletePlanFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}

//巡检任务文件删除

export function deleteTaskFile(id) {
  
  return request({
    url: `/opatrolTask/deleteTaskFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}

//巡检记录文件删除

export function deleteRecordFile(id) {
  
  return request({
    url: `/patrolrecord/deleteRecordFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}

//维护标准文件删除

export function deleteStandardFile(id) {
  
  return request({
    url: `/omaintainstandardinfo/deleteMaintainFile`,
    method: 'delete',
    params: {
      id
    }
  })
}


//项目资料文件删除

export function deleteProjectFile(id) {
  
  return request({
    url: `/oprojectdatainfo/deleteProjectFile/`,
    method: 'delete',
    params: {
      id
    }
  })
}

//应急预案文件删除

export function deleteEmergencyFile(id) {

  return request({
    url: `/emergency/plan/file/delete`,
    method: 'delete',
    params: {
      id
    }
  })
}

//发布通知文件删除

//删除应急通知附件 
export function EmergencyFileIndex(id) {
  
  return request({
    url: `/emergency/delete/notification/file`,
    method: 'delete',
    params: {
      id
    }
  })
}





