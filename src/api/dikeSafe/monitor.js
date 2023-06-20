/*
 * @Author: L
 * @Date: 2022-07-08 15:31:07
 * @LastEditTime: 2022-07-11 21:15:07
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/reservoir-damsafety/web'

// const temp = '/reservoir-damsafety/web'

//获取大坝监测数据列表
export function getDamMonitorList(id) {
  return request({
    url: temp + '/dam/monitor/data/list',
    method: 'get',
    params: {
      id
    }
  })
}

// // 获取打孔信息
// export function getHoleData(id){
//     return request({
//       url: temp + '/dam/monitor/data/list',
//       method: 'get',
//       params: {
//         id
//       }
//     })
//   }