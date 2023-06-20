import request from '@/utils/request'
//拼接有的参数
// function getparamsStr(paramsObj){
//     let tempStr = "";
//     for(const el in paramsObj){
//         if(paramsObj[el] ||paramsObj[el]===0) {
//             tempStr = tempStr +el+'='+paramsObj[el]+'&'
//         }
//     }
//     return tempStr.slice(0,tempStr.length-1)

// }

const temp = "/reservoir-ow/web"




/**
 * 删除预警（单个）
 * @param {String} id 
 * @returns 
 */
export async function deleteWarnTransfiniteById(id) {
    return await request({
        url: temp + '/warn/transfinite/delete',
        method: 'get',
        params: {
            id
        }
    })
}

/**
 * 删除预警（批量）
 * @param {Array} ids 
 * @returns 
 */
export async function deleteWarnTransfiniteByIds(ids) {
    return await request({
        url: temp  + '/warn/transfinite/deletes',
        method: 'post',
        data: ids
    })
}


// export function getRiverSystem() {
//     return request({
//         url:  temp + '/common/river/system/list',
//         method: 'GET',
//     })
// }


export function getWarnTransfiniteInfo(id) {
    return request({
        url:  temp + '/warn/transfinite/info',
        method: 'GET',
        params: { id }
    })
}
// 分页查询
export function getWarns(params) {
    return request({
        url: temp + '/warn/transfinite/page',
        method: 'GET',
        params

    })
}

export function insertWarnDisposal(data) {
    return request({
        url:  temp + '/warn/disposal/add',
        method: 'POST',
        data,
    })
}
export function getTaskFromWarning(id) {
    return request({
        url:  temp + '/warn/task',
        method: 'GET',
        params: { id }
    })
}