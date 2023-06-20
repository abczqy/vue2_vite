import request from '@/utils/request'
// const temp = '/management-service/web'
const temp = '/management-service/web'
/*********** 大坝相关API  ****************/
// 大坝分页查询
function getDamList(data) {
    return request({
      url: temp + '/dam/page',
      method: 'get',
      params: data
    })
}

// 新增/修改大坝
function addDam(data) {
    return request({
      url: temp + '/dam/add/or/update',
      method: 'post',
      data
    })
}


// 删除大坝
function deleteDam(id) {
    return request({
      url: temp + '/dam/delete',
      method: 'delete',
      params: {
        id
      }
    })
}

// 大坝详情

function getDamDetail(id) {
    return request({
      url: temp + '/dam/info',
      method: 'get',
      params: {
        id
      }
    })
}

/*********** 溢洪道相关API  ****************/
// 溢洪道分页查询
function getSpillwayList(data) {
    return request({
      url: temp + '/spillway/page',
      method: 'get',
      params: data
    })
}

// 新增 / 修改 溢洪道
function addSpillway(data) {
    return request({
      url: temp + '/spillway/add/or/update',
      method: 'post',
      data
    })
}

// 删除溢洪道
function deleteSpillway(id) {
    return request({
      url: temp + '/spillway/delete',
      method: 'delete',
      params: {
        id
      }
    })
}

// 溢洪道详情

function getSpillwayDetail(id) {
    return request({
      url: temp + '/spillway/info',
      method: 'get',
      params: {
        id
      }
    })
}


/*********** 输水洞相关API  ****************/
// 输水洞分页查询
function getCaveList(data) {
    return request({
      url: temp + '/conveyance/page',
      method: 'get',
      params: data
    })
}

// 新增/修改输水洞
function addCave(data) {
    return request({
      url: temp + '/conveyance/add/or/update',
      method: 'post',
      data
    })
}



// 删除输水洞
function deleteCave(id) {
    return request({
      url: temp + '/conveyance/delete',
      method: 'delete',
      params: {
        id
      }
    })
}

// 输水洞详情

function getCaveDetail(id) {
    return request({
      url: temp + '/conveyance/info',
      method: 'get',
      params: {
        id
      }
    })
}

// 获取模型列表
function getModels(whichType){ 
  return request({
    url: temp + '/model/list',
    method: 'get',
    params: {
      type: whichType
    }
  })
}
export {
    getDamList,
    addDam,
    deleteDam,
    getDamDetail,
    getSpillwayList,
    addSpillway,
    deleteSpillway,
    getSpillwayDetail,
    getCaveList,
    addCave,
    deleteCave,
    getCaveDetail,
    getModels
}