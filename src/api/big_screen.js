/*
 * @Author: L
 * @Date: 2022-03-21 09:08:42
 * @LastEditTime: 2022-07-27 13:47:20
 * @LastEditors: Do not edit
 * @Description: 监控大屏相关API
 */
import request from "@/utils/request";
import extension from "@/utils/extension";
import {formatExcelDate} from "@/utils/time";
const temp = "/management-service/web";
const url = "/big-screen";
// 大屏：超限预警接口
export function getOverLimit(reservoirId) {
  return request({
    url: url + "/reservoir-ow/web/warn/home",
    params: {
      reservoirId,
      num: 10,
      isBigScreen: true
    },
    method: "get"
  });
}
// 大屏： 头部天气
export function getCurWeather() {
  return request({
    url: url + "/reservoir-ws/web/weather/now",
    method: "get"
  });
}
// 大屏： 设备在线
export function getDeviceOnlineInfo(reservoirId) {
  return request({
    url: url + "/management-service/web/tab/onlineinformation",
    params: {
      reservoirId,
      isBigScreen: true
    },
    method: "get"
  });
}
// 大屏：气象环境接口
export function getWeatherInfo() {
  return request({
    url: '/reservoir-ws/web/weather/rainfall/list?isBigScreen=true',
    method: "get"
  });
}
// 水库总览-设备在线统计
export function getDeviceOnline(params) {
  return request({
    url: temp + `/tab/onlineinformation`,
    params: params,
    method: "get"
  });
}

// 设备在线统计
export function getEquipmentOnlineTotal(riverId) {
  console.log("online", riverId);
  return request({
    url: `/screen/onlineinformation`,
    params: { riverId },
    method: "get"
  });
}

// 分页获取设备信息
export function getOnlineTotalOnPage(params) {
  return request({
    url: temp + "/tab/station/massage/page",
    method: "get",
    params
  });
}

// 导出设备在线信息
export async function exportOnlineTotalMessage(params, name) {
  const data = await request({
    method: "get",
    url: temp + "/tab/station/massage/download",
    params: params,
    responseType: "arraybuffer"
  });
  const src = ".xls";
  const type = extension[src];
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", fileUrl);
  const date = formatExcelDate()
  link.setAttribute("download", date + name + "设备在线统计" + ".xls");
  link.click();
}

// 测站类型
export function getStationType() {
  return request({
    // url: `/ssurveystation/getStationType`,
    url: `/screen/station/type`,
    method: "get"
  });
}

// 测站信息
export function getStationList(stationType_id, typeId) {
  return request({
    url: `/screen/station/status`,
    method: "get",
    params: {
      id: stationType_id,
      typeId: typeId
    }
  });
}
