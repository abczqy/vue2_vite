/*
 * @Author: L
 * @Date: 2022-03-15 14:00:26
 * @LastEditTime: 2022-05-24 10:42:54
 * @LastEditors: Do not edit
 * @Description: 综合调度相关api(首页右边部分)
 */

import request from '@/utils/request'
import extension from "@/utils/extension";
import {formatExcelDate} from "@/utils/time";
const temp = '/management-service/web'
const temp1 = '/reservoir-omm/web'
const tempWS = '/reservoir-ws/web'

// 水库总览
export function getReservoirData() {
  return request({
    url: temp + `/common/user/reservoir/List`,
    method: 'get'
  })
}

// 水库分页查询 -- 水库总览
export function getReservoirListPage(data) {
  return request({
    url: temp + '/tab/reservoir/list',
    method: 'get',
    params: data
  })
}

// 人员信息-总览
export function getPersonOverview(data) {
  return request({
    url: temp1 + `/statisticsInfo/getJrZlInfo`,
    method: 'post',
    data
  })
}

//短信通知
export function sendMessage(data) {
  return request({
    url: temp1 + `/sendSms/send/sms/app/info`,
    method: 'post',
    data
  })
}

//人员信息-列表 /statisticsInfo/getJrZlInfo
export function getPersonList(data) {
  return request({
    url: temp1 + `/statisticsInfo/get/statistics/info`,
    method: 'post',
    data
  })
}

// 获取水网概览  应该获取对应水系信息，这个要改掉
// export function getRiverInfo() {
//   return request({
//     url: '/sregion/getSregionInfo',
//     method: 'get'
//   })
// }

//根据测站类型及预警等级查询展示列表
export function getWarnsInfo(data) {
  return request({
    url: temp + '/tab/warn/info',
    method: 'get',
    params: {
      pageNum:data.pageNum,
      pageSize:data.pageSize,
      reservoirId:data.reservoirId,
      stationType:data.stationType,
      warnLevel:data.warnLevel,
      count:data.count,
      orderField:data.orderField,
      orderType:data.orderType
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
// 页签二级水库
export function getReservoirWarns(reservoirId) {
  return request({
    url: temp + '/tab/reservoir/station/warm',
    method: 'get',
    params: {
      reservoirId: reservoirId
    }
  })
}

// 页签二级预警信息
export function getTypeWarns(reservoirId) {
  return request({
    url: temp + '/tab/reservoir/station/type/warm',
    method: 'get',
    params: {
      reservoirId: reservoirId
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
  // if (id) {
  //   return request({
  //     url: '/home/warn',
  //     method: 'post',
  //     params: {
  //       riverSystemId:id
  //     }
  //   })
  // }else {
  //   return request({
  //     url: '/home/warn',
  //     method: 'post'
  //   })
  // }

}

//预警总览
export function getWarnsTotal(id) {
  return request({
    // url: '/home/warn/station/total',
    url: temp + '/overview/reservoir/station/total',
    method: 'get',
    params: {
      reservoirId:id
    }
  })
}

//实时预警表格
export function getRealtimeTable(data) {
  return request({
    // url: '/home/warn/station/page',
    url: temp + '/tab/warn/station/list',
    method: 'get',
    params: {
      pageNum:data.pageNum,
      pageSize:data.pageSize,
      // riverSystemId:data.riverSystemId,
      reservoirId: data.reservoirId,
      count:data.count,
      orderField:data.orderField,
      orderType:data.orderType
    }
  })
}

//水系表格 /home/riverSystem/list
export function getHomeRivers(data) {
  return request({
    url: '/home/riverSystem/list',
    method: 'get',
    params: {
      pageNum:data.pageNum,
      pageSize:data.pageSize,
      id:data.id,
      count:data.count,
      orderField:data.orderField,
      orderType:data.orderType
    }
  })
}

//竖条测站表格
export function getHomeStation(data) {
  return request({
    url: temp + '/tab/reservoir/station/all',
    method: 'get',
    params: {
      pageNum:data.pageNum,
      pageSize:data.pageSize,
      reservoirId:data.reservoirId,
      count:data.count,
      orderField:data.orderField,
      orderType:data.orderType
    }
  })
}


//应急通知相关

//1. 应急预案详情 需要传入预案id

export function getEmergencyDetails(id) {
  // console.log(id);
  return request({
    url: `/reservoir-omm/web/emergency/plan/info`,
    method: 'get',
    params: {
      id: id
    }
  })
}

//2. 应急预案下拉

export function getAllEmergency() {
  // console.log(id);
  return request({
    url: `/reservoir-omm/web/emergency/plan/list`,
    method: 'get'
  })
}

// 获取所有人员
export function getAllPerson(data) {

  return request({
    url: `/reservoir-sm/web/sysUser/getAllUser`,
    method: 'get',
    params: {
      reserviorId: data.reserviorId
    }
  })
}
//发布应急通知

export function emergencyPublish(data) {
  return request({
    url: '/reservoir-omm/web/emergency/insert',
    method: 'post',
    data
  })
}

//应急通知分页

export function getEmergencyTable(data) {

  return request({
    url: '/reservoir-omm/web/emergency/page',
    method: 'get',
    params: {
      pageNum:data.pageNum,
      pageSize:data.pageSize,
      reservoirId:data.reservoirId,
      count:data.count,
      orderField:data.orderField,
      orderType:data.orderType,
      startTime:data.startTime,
      endTime:data.endTime,
      userId:data.userId
    }
  })
}

//应急通知详情
export function getNoticeDetail(id) {
  return request({
    url: '/reservoir-omm/web/emergency/info',
    method: 'get',
    params: {
      id
    }
  })
}

//删除应急通知附件
export function deleteEmergencyFile(id) {

  return request({
    url: `/reservoir-omm/web/emergency/delete/notification/file`,
    method: 'delete',
    params: {
      id
    }
  })
}

//应急通知导出 /emergency/list/excel

export async function exportEmergency(params, name) {
  const data = await request({
    method: "get",
    url: '/reservoir-omm/web/emergency/list/excel',
    params: params,
    responseType: 'arraybuffer',
  });
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + name + '应急通知' + '.xls');
  link.click();
}


//获取实时天气
export function getWeather() {
  return request({
    url: tempWS + '/weather/now',
    method: 'get'
  })
}

//获取未来七天天气
export function getFutureWeather() {
  return request({
    url: tempWS + '/weather/list/page',
    method: 'get'
  })
}

//获取降雨
export function getRaindrop() {
  return request({
    url: tempWS + '/weather/rainfall/list',
    method: 'get'
  })
}


//表格导出相关

//水系导出
export function downloadRiver(id) {
  return request({
    url: temp + '/tab/reservoir/excle',
    method: 'get',
    params: {
      reservoirId: id
    }
  })
}

//测站导出
export async function downloadStation(reservoirId, name) {
  const data = await request({
    method: "get",
    url: temp + "/tab/station/excle",
    params: { reservoirId },
    responseType: 'arraybuffer',
  });
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + name + '测站.xls');
  link.click();
}

//实时预警导出

export function downloadRealtime(id) {
  return request({
    url: temp + '/tab/warn/station/excel',
    method: 'get',
    params: {
      reservoirId: id
    }
  })
}

//预警详情导出
export async function downloadWarn(params, name) {
  const data = await request({
    method: "get",
    url: temp + '/tab/warn/info/excel',
    params: params,
    responseType: 'arraybuffer',
  });
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + name + '预警统计' + '.xls');
  link.click();
  // return request({
  //   url: temp + '/tab/warn/info/excel',
  //   method: 'get',
  //   params: {
  //     stationType: data.stationType,
  //     reservoirId: data.reservoirId,
  //     warnLevel: data.warnLevel || ''
  //   }
  // })
}

// 所有巡检人员表格
export function patrolPersons(data) {
  return request({
    url: temp1 + '/statisticsInfo/get/patrol/personnel',
    method: 'post',
    data
  })
}

// 巡检记录表格
export function patrolRecords(data) {
  return request({
    url: temp1 + '/statisticsInfo/list',
    method: 'post',
    data
  })
}

//巡检人员导出
export async function downloadPatrolPersons(params, name) {
  const data = await request({
    method: "post",
    url: temp1 + '/statisticsInfo/get/patrol/personnel/download',
    data: params,
    responseType: 'arraybuffer',
  });
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + name + '巡检员' + '.xls');
  link.click();
}

//巡检记录导出

export async function downloadPatrolRecords(params, name) {
  const data = await request({
    method: "post",
    url: temp1 + '/statisticsInfo/list/download',
    data: params,
    responseType: 'arraybuffer',
  });
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + name + '记录' + '.xls');
  link.click();
}

// 视频入侵及导出

export function getIntrusionTable(data) {

  return request({
    // url: '/home/intrusion/list',
    url: temp + '/tab/intrusion/station',
    method: 'get',
    params: {
      pageNum:data.pageNum,
      pageSize:data.pageSize,
      // riverSystemId:data.riverSystemId,
      count:data.count,
      orderField:data.orderField,
      orderType:data.orderType,
      reservoirId: data.reservoirId
      // endTime:'',
    }
  })
}

export function downloadIntrusion(id) {
  return request({
    url: temp + '/tab/intrusion/excle',
    method: 'get',
    params: {
      reservoirId: id
    }
  })
}

//通用表格导出
export async function exportTable(url, params, tableName) {
  const data = await request({
    method: "get",
    url: temp + url,
    params: params,
    responseType: 'arraybuffer',
  });
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + tableName + '.xls');
  link.click();
}
