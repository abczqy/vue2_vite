/*
 * @Author: L
 * @Date: 2022-07-08 15:31:07
 * @LastEditTime: 2022-07-11 18:32:24
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/reservoir-damsafety/web'
const temp2 = '/reservoir-om/web'
const temp3 = '/management-service/web'

// 获取浸润线图所需数据
export async function getCanvas(params) {
    return await request({
        method: "get",
        url: temp + "/saturation/line/get/dam/info",
        params
    })
}


// 获取浸润线table表格数据
export async function getTableData(params) {
    return await request({
        method: "get",
        url: temp + "/saturation/line/get/pressure/data/info",
        params
    })
}

// 获取浸润线筛选
export async function getLineFilter(params) {
    return await request({
        method: "get",
        url: temp2 + "/water/max/level",
        params
    })
}

// 获取浸润线测站
export async function getStations(id) {
    return await request({
        method: "get",
        url: temp3 + "/survey/station/dam/list",
        params: {
            id
        }
    })
}
