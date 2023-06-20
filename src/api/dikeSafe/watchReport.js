import request from '@/utils/request'
import extension from "@/utils/extension";
import {formatExcelDate} from "@/utils/time";

const temp = '/reservoir-damsafety/web'

// 监测报表-导出
export async function exportWatchReportList(monitorType, params, exportName) {
  // 判断是位移/渗压/渗流的接口
  let typeUrl = monitorType === '29' ? '/monitoring/displacement/get/dam/export/excel' : monitorType === '30' ? '/dam/pressure/get/dam/export/excel' : '/dam/seepage/export/excel'
  const data = await request({
    method: "get",
    url: temp + typeUrl,
    params,
    responseType: 'arraybuffer',
  })
  const src = '.xls';
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + '-' + exportName.reservoirName + '-' + exportName.damName + '-' + exportName.monitorName + '监测报表.xls');
  link.click();
}

//获取手风琴列表
export function getAccordion(data){
  return request({
    url: temp + '/dam/common/con/get/re/is/db/list',
    method: 'get',
    params: {
      reservoirId: data.reservoirId,
      damId: data.damId,
      stationType: data.stationType
    }
  })
}

// 数据分析-大坝关联测站页签
export function getUnionTab(data) {
  return request({
    method: "get",
    url: temp + "/dam/common/con/bookmark",
    params: {
      id: data.id,
      typeId: data.typeId
    }
  })
}

// 大坝位移-y轴
export function getYaxis(data){
  return request({
    url: temp + '/monitoring/displacement/get/dam/displacement/list',
    method: 'get',
    params: {
      id: data.id,
      typeId: data.typeId
    }
  })
}

// 大坝位移-x轴
export function getXaxis(data){
  return request({
    url: temp + '/monitoring/displacement/get/dam/list',
    method: 'get',
    params: data
  })
}

// 大坝位移-分页
export function getAxisPage(data){
  return request({
    url: temp + '/monitoring/displacement/get/dam/page',
    method: 'get',
    params: {
      pageNum: data.pageNum || 1,
      pageSize: data.pageSize || 10,
      count: true,
      orderField: data.orderField || 'createTime',
      orderType: data.orderType || 'desc',
      // stationId: data.stationId,
      monitorId: data.monitorId,
      id: data.id,
      type: data.type,
      endTime: data.endTime,
      startTime: data.startTime
    }
  })
}

// 大坝渗压-x轴
export function getXaxis1(data){
  return request({
    url: temp + '/dam/pressure/get/dam/list',
    method: 'get',
    params: data
  })
}

// 大坝渗压-分页
export function getAxisPage1(data){
  return request({
    url: temp + '/dam/pressure/get/dam/page',
    method: 'get',
    params: {
      pageNum: data.pageNum || 1,
      pageSize: data.pageSize || 10,
      count: true,
      orderField: data.orderField || 'createTime',
      orderType: data.orderType || 'desc',
      // stationId: data.stationId,
      monitorId: data.monitorId,
      id: data.id,
      type: data.type,
      endTime: data.endTime,
      startTime: data.startTime
    }
  })
}

// 大坝渗流-x轴
export function getXaxis2(data){
  return request({
    url: temp + '/dam/seepage/list',
    method: 'get',
    params: data
  })
}

// 大坝渗流-分页
export function getAxisPage2(data){
  return request({
    url: temp + '/dam/seepage/get/seepage/dam/page',
    method: 'get',
    params: {
      pageNum: data.pageNum || 1,
      pageSize: data.pageSize || 10,
      count: true,
      orderField: data.orderField || 'createTime',
      orderType: data.orderType || 'desc',
      // stationId: data.stationId,
      monitorId: data.monitorId,
      id: data.id,
      type: data.type,
      endTime: data.endTime,
      startTime: data.startTime
    }
  })
}
