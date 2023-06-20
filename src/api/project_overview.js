/*
 * @Author: L
 * @Date: 2022-06-15 09:11:20
 * @LastEditTime: 2022-06-21 17:17:12
 * @LastEditors: Do not edit
 * @Description: 工程概况相关API
 */
import request from '@/utils/request'
const temp = '/management-service/web'
// 获取工程信息
function getOverviewInfo(id) {
    return request({
      url: temp + '/profile/info',
      method: 'get',
      params: {
        id
      }
    })
}


// 修改工程信息
function editOverviewInfo(data) {
    return request({
      url: temp + '/profile/update',
      method: 'put',
      data
    })
}


export {
    getOverviewInfo,
    editOverviewInfo
}