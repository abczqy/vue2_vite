import request from '@/utils/request'
const temp = '/reservoir-damsafety/web'
import extension from '@/utils/extension';
import {formatExcelDate} from "@/utils/time";
/**
 * 大坝安全—特征数据
 */


/**
 * 获取特征值分页列表
 */

export async function getStatisticsList(params) {
    return await request({
        method: "get",
        url: temp + "/data/statistics/list",
        params
    })
}

/**
 * 年度统计分页列表
 */

export async function getStatisticsAnnualList(params) {
    return await request({
        method: "get",
        url: temp + "/data/statistics/annual/list",
        params
    })
}

/**
 * 特征值导出
 */

export async function exportStatisticsList(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/data/statistics/list/excel",
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
    link.setAttribute("download", date + '-' + exportName.reservoirName + '-' + exportName.damName + '-' + exportName.title + '.xls');
    link.click();
}

/**
 * 年度统计导出
 */

export async function exportStatisticsAnnualList(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/data/statistics/annual/list/excel",
        params,
        responseType: 'arraybuffer'
    })
    const src = '.xls';
    const type = extension[src]
    const blob = new Blob([data], { type });
    let fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a")
    link.setAttribute("href", fileUrl);
    const date = formatExcelDate()
    link.setAttribute("download", date + '-' + exportName.reservoirName + '-' + exportName.damName + '-' + exportName.title + '.xls');
    link.click();
}
