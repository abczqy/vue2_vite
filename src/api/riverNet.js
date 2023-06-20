import request from '@/utils/request'

// let str = 'http://192.168.50.88:7788'
export function addRiver(data) {
  return request({
    url: '/sregion/insert',
    method: 'post',
    data
  })
}

export function deleteRiver(id) {
  
    return request({
      // url: `/sregion/delete/${id}`,
      url: `/sregion/delete/`,
      method: 'delete',
      params: {
        id
      }
    })
}

export function getRiverList(data) {
    return request({
      url: '/sregion/getSriverSystemList',
      method: 'get',
      params: {
        pageNum: data.current,
        pageSize: data.pageSize,
        id: data.id,
        count: data.count,
        orderField: data.orderField,
        orderType: data.orderType,
      }
    })
}

export function getDetails(id) {
    return request({
      // url: `/sregion/getSriverSystemInfo/${id}`,
      url: `/sregion/getSriverSystemInfo/`,
      method: 'get',
      params: {
        id
      }
    })
}

export function editRiver(data) {
    return request({   
      url: `/sregion/update`,
      method: 'put',
      data
    })
}


export function getRiverInfo() {
  return request({
    url: '/sregion/getSregionInfo',
    method: 'get'
    // params: {
    //   pageNum: data.pageNum,
    //   pageSize: data.pageSize,
    
    // }
  })
}

export function editRiverInfo(data) {
  return request({   
    url: `/sregion/updateInfo`,
    method: 'put',
    data
  })
}

export function getAllRiver() {
  return request({
    url: '/sregion/getSriverSystemListAll',
    method: 'get'
    // params: {
    //   pageNum: data.pageNum,
    //   pageSize: data.pageSize,
    
    // }
  })
}






