import request from '@/utils/request'
const temp = '/management-service/web'

/*********** 测站相关API  ****************/
//获取测站分类树
export function getStationTree() {
  return request({
    url: temp + '/survey/station/tree',
    method: 'get'
  })
}


// 添加/修改测站
export function addStation(data) {
  return request({
    url: temp + '/survey/station/add/or/update',
    method: 'post',
    data
  })
}

// 删除测站
export function deleteStation(id) {
  
    return request({
      url: temp + `/survey/station/delete`,
      method: 'delete',
      params: {
        id
      }
    })
}

// 获取所有主站 id为当前测站的id
export function getAllMainStation(data) {
  return request({
    url: temp + `/survey/station/main/station/list`,
    method: 'get',
    params: {
      id: data.id,
      stationId: data.stationId
    }
  })
}


// 获取测站详情
export function getStationDetails(id) {
  return request({
    url: temp + `/survey/station/info`,
    method: 'get',
    params: {
      id
    }
  })
}


/*********** 监测项目相关API  ****************/

// 获取监测项目列表
export function getStationProList(data) {
  return request({
    url: temp + '/monitor/project/page',
    method: 'get',
    params: data
  })
}


// 删除监测项目
export function deletePro(id) {
  return request({
    url: temp + `/monitor/project/delete`,
    method: 'delete',
    params: {
      id
    }
  })
}

// 监测项目详情
export function getProDetails(id) {
  return request({
    url: temp + `/monitor/project/info`,
    method: 'get',
    params: {
      id
    }
  })
}

// 新增/修改监测项目
export function addPro(data) {
  return request({
    url: temp + '/monitor/project/add/or/update',
    method: 'post',
    data
  })
}



/*********** other APIs  ****************/



// 获取测站类型
export function getStationTypes() {
  return request({
    url: temp + '/survey/station/getStationType',
    method: 'get'
  })
}

// 根据测站类型获取监测项目列表
export function getMonitorPro(id){
  return request({
    url: temp + '/monitor/project/getSurveyProjectType',
    method: 'get',
    params: {
      id
    }
  })
}


// 获取所有遥测站 stationId type
export function getAllTelemetryStation(data) {
  return request({
    url: temp + '/telemetry/station/get/all',
    method: 'get',
    params: data
  })
}

//获取安全设备 
export function getDevices() {
  return request({
    url: temp + '/monitoring/list',
    method: 'get'
  })
}



//获取水工建筑
export function getHydraulicStructure(id) {
  return request({
    url: temp + '/common/user/reservoir/hyList',
    method: 'get',
    params: {
      reservoirId: id
    }
  })
}

// 获取大坝设备 
export function getDamDevices(data) {
  return request({
    url: temp + '/dam/station/list',
    method: 'get',
    params: {
      stationInfoId: data.stationInfoId,
      type: data.type,
    }
  })
}

// 获取 水位/雨量 选择状态 
export function getChooseStutas(id,typeId) {
  return request({
    url: temp + '/monitor/project/judgment/show',
    method: 'get',
    params: {
      reservoirId: id,
      typeId
    }
  })
}



// 获取打孔列表 
export function getHoles(id) {
  return request({
    url: temp + '/model/punching/list',
    method: 'get',
    params: {
      id
    }
  })
}


//获取闸门类型 
export function getGateType() {
  return request({
    url: '/ssurveystation/gate/type',
    method: 'get'
  })
}

