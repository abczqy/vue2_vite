/**
 * 大坝安全公共接口
 */
import request from '@/utils/request'
const temp = '/reservoir-damsafety/web'


/**
 * 根据水库id/大坝id/大坝类型查询所有大坝列表
 * @param {*} params 
 * @returns 
 */
export async function getDamStationList(params) {
    return await request({
        method: "get",
        url: temp + "/dam/common/con/get/re/is/db/list",
        params
    })
}


/**
 * 数据分析-大坝关联测站页签
 */

export async function getDamCommonBookmark(params){
    return await request({
        method:"get",
        url:temp + "/dam/common/con/bookmark",
        params
    })
}