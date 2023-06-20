/*
 * @Author: L
 * @Date: 2022-06-15 09:11:20
 * @LastEditTime: 2022-07-27 11:57:54
 * @LastEditors: Do not edit
 * @Description: 水库列表相关API
 */
import request from '@/utils/request'
// const temp = 'management-service/web'
// const temp = '/management-service/web'
const temp = '/management-service/web'
// const temp = 'http://192.168.88.135:6061/web'



// 获取水库区域信息
function getReservoirInfo() {
    return request({
      url: temp + '/region/info',
      method: 'get'
    })
}


// 修改水库区域信息
function editReservoirInfo(data) {
    return request({
      url: temp + '/region/update',
      method: 'post',
      data
    })
}


// 水库分页查询
function getReservoirList(data) {
    return request({
      url: temp + '/reservoir/list',
      method: 'get',
      params: data
    })
}

// 新增水库
function addReservoir(data) {
    return request({
      url: temp + '/reservoir/add',
      method: 'post',
      data
    })
}

// 修改水库
function editReservoir(data) {
    return request({
      url: temp + '/reservoir/update',
      method: 'put',
      data
    })
}

// 删除水库
function deleteReservoir(id) {
    return request({
      url: temp + '/reservoir/delete',
      method: 'put',
      params: {
        id
      }
    })
}

// 水库详情

function getReservoirDetail(id) {
    return request({
      url: temp + '/reservoir/info',
      method: 'get',
      params: {
        id
      }
    })
}

export {
    getReservoirInfo,
    editReservoirInfo,
    getReservoirList,
    addReservoir,
    editReservoir,
    deleteReservoir,
    getReservoirDetail,
}