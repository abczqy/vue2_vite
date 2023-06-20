/**
 * 大坝位移接口
 */

 import request from '@/utils/request'
 const temp = '/reservoir-damsafety/web'
 import extension from '@/utils/extension';



 /**
 * 数据分析-大坝位移数据标题
 * @param {*} params id:测站id  rid:水库id
 * @returns 
 */
  export async function getDisplacementTableTitle(params){
    return await request({
        method:"get",
        url:temp + "/displacement/statistics/chart/title",
        params
    })
 }

/**
 * 数据分析-大坝位移数据表格
 * @param {*} params 
 * @returns 
 */

 export async function getDisplacementTable(params){
    return await request({
        method:"get",
        url:temp + "/displacement/statistics/table/data",
        params
    })
 }

/**
 * 数据分析-大坝位移图形列表
 * @param {*} params 
 * @returns 
 */
 export async function getDisplacementEcharts(params){
    return await request({
        method:"get",
        url:temp + "/displacement/statistics/chart/data",
        params
    })
 }