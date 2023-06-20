import request from '@/utils/request'
const temp = '/reservoir-omm/web'

export function addEmergency(data) {
  return request({
    url: temp + '/emergency/plan/saveOrUpdate',
    method: 'post',
    data
  })
}

export function deleteEmergency(id) {
  return request({
    url: temp + `/emergency/plan/delete`,
    method: 'delete',
    params: {
      id
    }
  })
}

export function getEmergencyList(params) {
  return request({
    url: temp + '/emergency/plan/page',
    method: 'get',
    params
  })
}

export function getDetails(id) {
  // console.log(id);
  return request({
    url: temp + `/emergency/plan/info`,
    method: 'get',
    params: {
      id: id
    }
  })
}

export function editEmergency(data) {
  return request({
    url: temp + `/emergency/plan/saveOrUpdate`,
    method: 'post',
    data
  })
}



// 删除文件

export function deleteEmergencyFile(id) {

  return request({
    url: temp + `/emergency/plan/file/delete`,
    method: 'delete',
    params: {
      id
    }
  })
}

