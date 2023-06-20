import request from '@/utils/request';
const temp = "/reservoir-sluice/web";
import extension from '@/utils/extension';
import {formatExcelDate} from "@/utils/time";
/**
 * 查询操作记录数据
 */

export async function getGateLogPage(params) {
    return await request({
        method: "get",
        url: temp + '/sluice/gate/log/get/page',
        params
    })
}


/**
 * 导出操作记录数据
 */

export async function exportLogTable(params,exportName) {
    // name = name || '运行记录.xls'
    const data = await request({
        method: "get",
        url: temp + "/sluice/gate/log/export",
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
    link.setAttribute("download", date + exportName.reservoirName + exportName.stationName + '运行记录.xls');
    link.click();
}
