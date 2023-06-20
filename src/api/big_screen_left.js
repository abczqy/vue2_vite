/*
 * @Author: L
 * @Date: 2022-04-15 09:23:59
 * @LastEditTime: 2022-05-09 15:07:12
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request';

//  按类型获取测站列表
//  水文水情:10
//  视频图像:19
//  气象空气:12

// 根据测站类型,获取切换的标题
export async function getStationType(typeId, id) {
    return await request({
        url: "/screen/station/status",
        method: "get",
        params: { typeId, id}
    })
}

//水文雨情 测站id：1506094918542766082
export async function getWaterAndRain(id) {

    return await request({
        url: "/screen/waterandrain",
        method: "get",
        params: {
            id
        }
    })
}

// 
export async function getWeatherAndAir(id){
    return await request({
        url: "/screen/weatherandair",
        method: "get",
        params: {
            id
        }
    })
}

// const src = "http://192.168.50.16:7787/web"
const src = ""
// 气象空气 获取图表数据
export async function getAllAirList(params) {
	return await request({
		method: "get",
		url: src + "/screen/monitor/weatherandair",
		params
	})
}

// 安全检测 获取图表数据
export async function getAllSafeList(params) {
	return await request({
		method: "get",
		url: src + "/screen/monitor/security",
		params
	})
}

// 气象空气表头
export async function getAirTableTitle(id) {
	return await request({
		method: "get",
		url: src + "/screen/weatherandair/title",
		params: { id }
	})
}

// 安全检测表头
export async function getSafeTableTitle(id, securitId) {
	return await request({
		method: "get",
		url: src + "/screen/security/title",
		params: { id, securitId }
	})
}

// 获取设备信息下拉框
export async function getSafeEquipment(stationId) {
	return await request({
		method: "get",
		url: src + "/screen/monitor/equipment",
		params: { stationId }
	})
}