/*
 * @Author: L
 * @Date: 2022-07-11 15:36:21
 * @LastEditTime: 2022-08-08 17:38:34
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/big-screen/management-service/web'
const temp2 = '/big-screen/reservoir-damsafety/web'
const temp3 = '/big-screen/reservoir-sluice/web'
const temp4 = '/big-screen/reservoir-ws/web'

export {
    getCameras, // 获取视频图像列表
} from './camera'



// 获取所有水库
export function getAllReservoir() {
    return request({
      url: temp + '/common/reservoir/List',
      method: 'get'
    })
  }
// 获取水库下的测站列表
export function getAllStations(data) {
  return request({
    url: temp + `/overview/reservoir/station/data`,
    method: 'get',
    params: {
      id: data.id,
      typeId: data.typeId
   }
  })
}
// 获取预警信息
export function getWarns(id) {
    return request({
      url: temp + '/tab/reservoir/station/warm',
      method: 'get',
      params: {
        reservoirId: id
      }
    })
}

// 获取总览预警信息
export function getWarnsAll(data) {
    return request({
      url: temp + `/tab/reservoir/warm`,
      method: 'get',
      params: {
        isBigScreen: data.isBigScreen
      }
    })
  }

// 获取大坝孔位信息列表
export async function getDamStationList(id) {
    return await request({
        method: "get",
        url: temp2 + "/dam/monitor/data/list",
        params: {
          // isBigScreen: true,
          id
        }
    })
}

// 获取大坝列表 
export async function getbigScreenDamList(params) {
  return await request({
      method: "get",
      url: temp2 + "/dam/common/con/get/re/is/db/list",
      params: params
  })
}

// 获取水工建筑列表
export async function getHydraulicConstruction(params) {
    return await request({
        method: "get",
        url: temp + "/spillway/get/water/work",
        params
    })
}

// 获取闸门状态
export async function getGateInfo(params) {
  return await request({
      method: "get", 
      url: temp3 + "/sluice/gate/get/gate/info",
      params: {
        isBigScreen: true,
        hydraulicConstructionId: params.hydraulicConstructionId,
        reservoirId: params.reservoirId,
      }
  })
}


// 获取测站类型
export async function getStationType(params) {
  return await request({
      method: "get",
      url: temp + "/common/reservoir/station/type",
      params
  })
}

// 大屏：气象环境接口
export function getWeatherInfo() {
  return request({
    url: temp4 + '/weather/rainfall/list?isBigScreen=true',
    method: "get"
  });
}