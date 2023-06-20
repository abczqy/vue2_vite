/*
 * @Author: L
 * @Date: 2022-07-09 16:52:33
 * @LastEditTime: 2022-07-11 16:44:13
 * @LastEditors: Do not edit
 * @Description: 过程线分析
 */
import request from '@/utils/request'
const temp = '/reservoir-damsafety/web'
const temp2 = '/management-service/web'

// 获取表格信息
export function getTableData(params){
    return request({
      url: temp + '/process/data/list',
      method: 'get',
      params
    })
  }
// 获取图表信息
export function getEchartsData(params){
  return request({
    url: temp + '/process/data/listNoPage',
    method: 'get',
    params
  })
}
  
// 获取分组字典
export function getFilterTags(params) {
  // sessionStorage.setItem('test','000')

  return request({
    url: temp2 + '/survey/station/security/projectTypeId',
    method: 'get',
    params
  })
}

// 获取类型标签 