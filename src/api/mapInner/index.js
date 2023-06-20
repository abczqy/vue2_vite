/*
 * @Author: L
 * @Date: 2022-07-05 16:24:25
 * @LastEditTime: 2022-08-15 15:52:02
 * @LastEditors: Do not edit
 */
import request from '@/utils/request'
const temp = '/management-service/web'
const temp2 = '/reservoir-omm/web'
const temp3 = '/big-screen/management-service/web'
const temp4 = '/big-screen/reservoir-omm/web'


/************** 总览 ***************/
// 根据水库获取测站类型
export function getStationTypes(id) {
    
    return request({
      url: temp + `/common/reservoir/station/type`,
      method: 'get',
      params: {
        reservoirId: id
      }
    })
  }

// 获取水库信息 
export function getReservoirInfo() {
    return request({
        url: temp + `/overview/reservoir/data`,
        method: 'get'
    })
}

// 获取大屏水库信息 
export function bigScreenReservoir() {
  return request({
      url: temp3 + `/overview/reservoir/data`,
      method: 'get',
      params: {
        isBigScreen: true
      }
  })
}

// 获取二级数据信息 
export function getStationsData(data) {
    return request({
        url: temp + `/overview/reservoir/station/data`,
        method: 'get',
        params: {
            id: data.id,
            typeId: data.typeId
        }
    })
}

// 获取人员列表
export function getAllPerson(data) {
  return request({
      url: temp2 + `/statisticsInfo/get/statistics/info`,
      method: 'post',
      data
  })
}

// 获取大屏人员列表
export function getBigscreenPerson(data) {
  return request({
      url: temp4 + `/statisticsInfo/get/statistics/info`,
      method: 'post',
      data
  })
}
