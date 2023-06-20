
/**
 * 闸门控制
 */
 import extension from '@/utils/extension';
import request from '@/utils/request';
import {formatExcelDate} from "@/utils/time";
const temp = "/reservoir-sluice/web";


/**
 * 下面这些接口暂时无用。
 * @param {*} id
 * @returns
 */
// 闸门控制
// 获取测站列表，根据水系id获取
export async function getGate(id) {
    return await request({
        method: "get",
        url: temp + "/gate/stationlist",
        params: { id }
    })
}

// echarts gate list 获取图表数据
export async function getAllGateList(params) {
    return await request({
        method: "get",
        url: temp + "/gate/rtulist",
        params
    })
}

//  table gate list table分页获取
export async function getGateList(params) {
    return await request({
        method: "get",
        url: temp + "/gate/rtulist/page",
        params,

    })

}

// 导出 gate list
export async function exportGateTable(params, exportName) {
    const data = await request({
        method: "get",
        url: temp + "/gate/export/excel",
        params,
        responseType: "arraybuffer"
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


// 操作

export async function getGateByPage(params) {
    return await request({
        url: temp + "/gate/get/page",
        method: "get",
        params
    })
}


// 通过测站id拿视频信息
export async function getVideoById(id, groupId) {
    return await request({
        url: temp + "/gate/station/video",
        method: "get",
        params: { id, groupId }
    })
}

// 将开度设定到特定值
export async function setTargetGateOpen(params) {
    return await request({
        url: temp + "/gate/gate/operation/preset",
        method: "get",
        params
    })
}


// // 导出操作日志

// export async function exportGate(params) {
//     return await request({
//         url: temp + "/gate/export",
//         method: "get",
//         params
//     })
// }

// 获取测站状态
export async function getStatusByGate(id) {
    return await request({
        method: "get",
        url: temp + "/gate/station/status",
        params: { id }
    })
}

//  获取最新的闸门信息

export async function getControlGateInfo(params) {
    return await request({
        url: temp + "/gate/get/info",
        method: "get",
        params
    })
}

//  设置操作信息

export async function addControlGateInfo(data) {
    return await request({
        url: temp + "gate/insert/log",
        method: "post",
        data
    })
}


// 操作闸门
export async function setOperation(params) {
    return await request({
        url: temp + "/gate/gate/operation",
        method: "get",
        params
    })
}


// 获取表头
export async function getGateTableTitle(id, gateGroupId) {
    return await request({
        method: "get",
        url: temp + "/gate/rtulist/title",
        params: { id, gateGroupId }
    })
}

// 获取闸门下拉框
export async function gateGroup(stationId) {
    return await request({
        method: "get",
        url: temp + '/gate/get/gateGroup',
        params: { stationId }
    })
}

// 通过测站id和闸门id拿视频
export async function getVideoByGateId(params) {
    return await request({
        method: "get",
        url: temp + "/gate/get/gateGroup/video",
        params
    })
}
