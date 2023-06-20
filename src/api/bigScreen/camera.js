import request from '@/utils/request'

const temp = "/big-screen/reservoir-videoimages/web"


//获取视频列表
export function getCameras(params) {
  return request({
    url: temp + "/video/online/page",
    method: 'get',
    params
  })
}