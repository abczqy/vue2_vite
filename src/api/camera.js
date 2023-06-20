/*
 * @Author: L
 * @Date: 2022-03-16 11:34:08
 * @LastEditTime: 2022-06-28 16:45:27
 * @LastEditors: Do not edit
 * @Description: 摄像头相关api
 */

import request from '@/utils/request'

const temp = "/reservoir-videoimages/web"
const _temp = "/management-service/web"


//获取视频列表
export function getCameras(data) {
  return request({
    url: temp + "/video/page",
    method: 'get',
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      count: data.count,
      id: data.id,
      orderType: data.orderType,
      orderField: data.orderField,
    }
  })
}

//获取监控状态列标
export function getCameraStatus(data) {
  return request({
    url: temp + `/video/online/page`,
    method: 'get',
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      count: data.count,
      id: data.id,
      orderType: data.orderType,
      orderField: data.orderField,
    }
  })
}

//视频点播

export function playCameras(channelId, deviceId) {
  return request({
    url: temp + `/video/play/start`,
    method: 'get',
    params: {
      channelId,
      deviceId
    }
  })
}

//  大屏视频点播

export function _playCameras(channelId, deviceId) {
  return request({
    url: temp + `/screen/play/start`,
    method: 'get',
    params: {
      channelId,
      deviceId
    }
  })
}





//监控控制

export function cameraComtrol(data) {
  return request({
    url: temp + `/video/control`,
    method: 'post',
    data
  })
}


// 根据测站id拿到视频列表

export function getCameraList(params) {
  return request({
    url: temp + "/dispatch/video/list",
    method: "get",
    params
  })
}
export function _getCameraList(params) {
  return request({
    url: _temp + "/overview/video/list",
    method: "get",
    params
  })
}

//获取正常及预警数量

export function getNormals(id) {
  return request({
    url: temp + `/video/statistics`,
    method: 'get',
    params: {
      pageNum: 1,
      pageSize: 10,
      count: true,
      id
    }
  })
}


// 获取预警列表

export async function getImageData(params) {
  return await request({
    url: temp + "/video/video/intrusion",
    params,
    method: 'get'
  })
}

// 视频监控不分页
export async function getVideoList(id) {
  return await request({
    url: temp + "/video/list",
    method: 'get',
    params:{
      id
    }
  })
}
export async function _getVideoList(id) {
  return await request({
    url: temp + "/video/intrusion/list",
    method: 'get',
    params:{
      id
    }
  })
}