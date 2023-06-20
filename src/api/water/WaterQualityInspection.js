
/**
 * 安全检测
 * 6031
 */
import extension from '@/utils/extension';
import request from '@/utils/request';
import {formatExcelDate} from "@/utils/time";
const temp = "/reservoir-om/web";



// 获取测站列表，根据水系id获取
export async function getQuality(id) {
    return await request({
        method: "get",
        url: temp + "/quality/stationlist",
        params: { id }
    })
}

// echarts air list 获取图表数据
export async function getAllQualityList(params) {
    return await request({
        method: "get",
        url: temp + "/quality/rtulist",
        params
    })
}

//  table air list table分页获取
export async function getQualityList(params) {
    return await request({
        method: "get",
        url: temp + "/quality/rtulist/page",
        params
    })
}

// 导出
export async function exportQualityTable(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/quality/export/excel",
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
export async function getStatusByQuality(id) {
    return await request({
        method: "get",
        url: temp + "/quality/station/status",
        params: { id },
    })

}

// 获取表头
export async function getQualityTableTitle(id, securitId) {
    return await request({
        method: "get",
        url: temp + "/quality/rtulist/title",
        params: { id, securitId }
    })
}
