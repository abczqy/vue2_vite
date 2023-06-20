/**
 * 水文水情
 */
import extension from '@/utils/extension';
import request from '@/utils/request';
import {formatExcelDate} from "@/utils/time";
const temp = "/reservoir-om/web";


/**
 * 根据水库id，获取测站详情列表
 * @param {*} id
 * @returns
 */
export async function getWater(id) {
    return await request({
        method: "get",
        url: temp + "/water/stationlist",
        params: { id },
    })

}



/**
 * 按条件获取数据--不分页  echarts
 * @param {*} params
 * @returns
 */
export async function getAllWaterList(params) {
    return await request({
        method: "get",
        url: temp + "/water/rtulist",
        params
    })
}

/**
 * 分页获取数据--分页  tables
 * @param {*} params
 * @returns
 */
export async function getWaterList(params) {
    return await request({
        method: "get",
        url: temp + "/water/rtulist/page",
        params
    })
}


/**
 * table 导出
 * @param {*} params
 * @returns
 */
export async function exportWaterTable(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/water/export/excel",
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
    link.setAttribute("download",  date + '-' + exportName.reservoirName + '-' + exportName.stationName + '-' + exportName.title + '.xls');
    link.click();
}

/**
 * 根据水库id，获取测站状态
 * @param {*} id
 * @returns
 */
export async function getStatusByWater(id) {
    return await request({
        method: "get",
        url: temp + "/water/station/status",
        params: { id }
    })
}

/**
 * 根据测站id，获取table 标题名字
 * @param {*} id
 * @returns
 */
export async function getTableTitle(id) {
    return await request({
        url: temp + "/water/rtulist/title",
        method: "get",
        params: { id }
    })
}


/**
 * 获取水文水情视频列表
 * @returns promise
 */
export async function getWaterVideo(id) {
    return await request({
        url: temp + '/water/station/video',
        method: "get",
        params: { id }
    })
}
