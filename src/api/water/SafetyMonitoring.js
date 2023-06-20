
/**
 * 安全检测
 * 6031
 */
 import extension from '@/utils/extension';
import request from '@/utils/request';
import {formatExcelDate} from "@/utils/time";
const temp = "/reservoir-om/web";



// 获取测站列表，根据水系id获取
export async function getSafe(id) {
    return await request({
        method: "get",
        url: temp + "/security/stationlist",
        params: { id }
    })
}

// echarts air list 获取图表数据
export async function getAllSafeList(params) {
    return await request({
        method: "get",
        url: temp + "/security/rtulist",
        params
    })
}

//  table air list table分页获取
export async function getSafeList(params) {
    return await request({
        method: "get",
        url: temp + "/security/rtulist/page",
        params
    })
}

export async function exportSafeTable(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/security/export/excel",
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
// 获取测站状态
export async function getStatusBySafe(id) {
    return await request({
        method: "get",
        url: temp + "/security/station/status",
        params: { id }
    })
}

// 获取表头
export async function getSafeTableTitle(id, securitId) {
    return await request({
        method: "get",
        url: temp + "/security/rtulist/title",
        params: { id, securitId }
    })
}
