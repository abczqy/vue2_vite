/**
 * 气象空气
 * 6031
 */
 import extension from '@/utils/extension';
 import request from '@/utils/request';
import {formatExcelDate} from "@/utils/time";
 const temp = "/reservoir-om/web";

/**
 * 根据水库id，获取测站列表
 * @param {String} id
 * @returns
 */
export async function getAir(id) {
    return await request({
        method: "get",
        url: temp + "/weather/stationlist",
        params: { id }
    })
}

/**
 * 按条件查询数据-不分页。 ------ echarts
 * @param {Object} params
 * @returns
 */
export async function getAllAirList(params) {
    return await request({
        method: "get",
        url: temp + "/weather/rtulist",
        params
    })
}

/**
 * 按条件查询数据-分页。 -------- tables
 * @param {Object} params
 * @returns
 */
export async function getAirList(params) {
    return await request({
        method: "get",
        url: temp + "/weather/rtulist/page",
        params
    })
}


/**
 * table表导出
 * @param {*} params
 * @returns
 */
export async function exportAirTable(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/weather/export/excel",
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
    link.setAttribute("download", date + '-' + exportName.reservoirName + '-' + exportName.stationName + '-' + exportName.title + '.xls');
    link.click();
}

/**
 * 通过id拿table    ----    表头数据
 * @param {String} id
 * @returns
 */
export async function getAirTableTitle(id) {
    return await request({
        method: "get",
        url: temp + "/weather/rtulist/title",
        params: { id }
    })
}

/**
 * 通过id，获取测站状态。
 * @param {String} id
 * @returns
 */
export async function getStatusByAir(id) {
    return await request({
        method: "get",
        url: temp + "/weather/station/status",
        params: { id }
    })
}
