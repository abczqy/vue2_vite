/**
 * 扬压力接口
 */

 import request from '@/utils/request'
 const temp = '/reservoir-damsafety/web'
 import extension from '@/utils/extension';

/**
 * 数据分析-扬压力数据标题
 * @param {*} params id:测站id  rid:水库id
 * @returns 
 */
 export async function getUpliftedPressureTableTitle(params){
    return await request({
        method:"get",
        url:temp + "/uplift/pressure/title",
        params
    })
 }

/**
 * 数据分析-扬压力数据表格
 * @param {*} params 
 * @returns 
 */

 export async function getUpliftedPressureTable(params){
    return await request({
        method:"get",
        url:temp + "/uplift/pressure/seepage/table",
        params
    })
 }

/**
 * 数据分析-扬压力图形列表
 * @param {*} params 
 * @returns 
 */
 export async function getUpliftedPressureEcharts(params){
    return await request({
        method:"get",
        url:temp + "/uplift/pressure/list",
        params
    })
 }
