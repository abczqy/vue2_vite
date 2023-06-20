/*
 * @Author: L
 * @Date: 2022-07-02 15:30:05
 * @LastEditTime: 2022-07-04 19:09:55
 * @LastEditors: Do not edit
 * @Description: 大坝安全相关API
 */
import request from '@/utils/request'

const temp = '/reservoir-damsafety/web'

//获取大坝监测数据列表
export function getDamMonitorList(id) {
    return request({
      url: temp + '/dam/monitor/data/list',
      method: 'get',
      params: {
        id
      }
    })
}

/******************* 公用 *********************/
//获取手风琴列表
export function getAccordion(data){
  return request({
    url: temp + '/monitoring/displacement/get/re/is/db/list',
    method: 'get',
    params: {
      mainDamOrNot: data.mainDamOrNot,
      reservoirId: data.reservoirId,
      stationType: data.stationType
    }
  })
}


//获取echarts表格 y 轴
export function getYaxis(data){
  return request({
    url: temp + '/monitoring/displacement/get/dam/displacement/list',
    method: 'get',
    params: {
      id: data. id,
      typeId: data.typeId
    }
  })
}


/****************** 区分路径 *********************/
//获取echarts表格 x 轴
export function getXaxis(data, url){
  const finalUrl = getUrl(url)
  return request({
    url: temp + finalUrl,
    method: 'get',
    params: {
      endTime: data.endTime,
      startTime: data.startTime,
      stationId: data.stationId,
      type: data.type,
      id: data.id,
    }
  })
}

 
// 获取分页table表格数据
export function getTableData(data, url){
  const finalUrl = getUrl(url)
  return request({
    url: temp + finalUrl,
    method: 'get',
    params: {
      endTime: data.endTime,
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      startTime: data.startTime,
      stationId: data.stationId,
      type: data.type,
      count: true,
      id: data.id,
      orderField: data.orderField,
      orderType: data.orderType
    }
  })
}

function getUrl(data){
  const temp = {
    displacementX: '/monitoring/displacement/get/dam/list',
    displacementTable: '/monitoring/displacement/get/dam/page',
    pressureX: '/dam/pressure/get/dam/list',
    pressureTable: '/dam/pressure/get/dam/page',
    seepageX: '/dam/seepage/list',
    seepageTable: '/dam/seepage/get/seepage/dam/page'
  }

  return temp[data]
}
