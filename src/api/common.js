/*
 * @Author: L
 * @Date: 2022-05-07 11:06:16
 * @LastEditTime: 2022-08-05 15:31:40
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request'
const temp = '/management-service/web'
// 获取字典
export function get_dictionaries(data) {
  // sessionStorage.setItem('test','000')

  return request({
    url: temp + '/dictionaries/queryXjXlDictionariesList',
    method: 'get',
    params: {
      'typeCode': data
    }
  })
}



// 获取分组字典
export function getDictionaries(data) {
  // sessionStorage.setItem('test','000')

  return request({
    url: temp + '/dictionaries/list/group',
    method: 'get',
    params: {
      typeCode: data
    }
  })
}

export function get_users(data) {
  return request({
    url: temp + '/dictionaries/queryXjXlDictionariesList',
    method: 'get',
    params: {
      'typeCode': data
    }
  })
}

// 获取水库下人员
export function getUsersByReservoir(data) {
  return request({
    url: '/reservoir-sm/web/sysUser/reservior/user',
    method: 'get',
    params: data
  })
}

// 获取所有水库
export function getAllReservoir() {
  return request({
    url: temp + '/common/reservoir/List',
    method: 'get'
  })
}

// 根据人员获取水库
export function getFilterReservoir() {
  return request({
    url: temp + '/common/user/reservoir/List',
    method: 'get'
  })
}

// 获取水库列表下拉
export function AllReservoirList(){
  return request({
    url: temp + '/reservoir/choice/List',
    method: 'get'
  })
}

// 获取轮播时间
// export function getAutoPlay() {
//   return request({
//     url: '/dictionaries/queryXjXlDictionariesList',
//     method: 'get',
//     params: {
//       'typeCode': data
//     }
//   })
// }

//获取水工建筑
export function getHydraulicStructure(id) {
  return request({
    url: temp + '/spillway/get/water/work',
    method: 'get',
    params: {
      reservoirId: id
    }
  })
}
