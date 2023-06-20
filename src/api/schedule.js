import request from '@/utils/request'
import {uploadFile} from './file';
// let src = "http://192.168.50.107:7788/web"
// let src = ""
const src = '/reservoir-omm/web'


export function addSchedule(data) {
  return request({
    url: src + '/workplan/insertPbInfo',
    method: 'post',
    data
  })
}

export function deleteSchedule(id) {

  return request({
    url: src + `/workplan/deleteWorkPlan/${id}`,
    method: 'put',
  })
}

export function getScheduleList(data) {
  return request({
    url: src + '/workplan/getWorkPlan',
    method: 'get',
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      // riverSystemId: data.riverSystemId,
      reservoirId: data.reservoirId,
      count: data.count,
      orderField: data.orderField,
      orderType: data.orderType,
    }
  })
}

// export function getDetails(id) {
//     return request({
//       url: `/workplan/getPbJhInfo/${id}`,
//       method: 'get'
//     })
// }

// 通过时间/水系获取数据
export function getDetailsByTime(data) {
  return request({
    url: src + "/workplan/selectPBPersonByDateAndSx",
    method: "get",
    params: data
  })
}

export function getDetails(id) {
  return request({
    url: src + `/workplan/getPbJhInfo`,
    method: 'get',
    params: {
      id: id
    }
  })
}

export function updatePbInfo(data) {
  return request({
    url: src + `/workplan/updatePbInfo`,
    method: 'post',
    data
  })
}


//模板导出
export async function exportTable(params,riverName) {
  // const res = await request({
  //   method:"get",
  //   url: src + "/workplan/pbExport",
  //   params
  // })
  const str = `${params.year}年${params.month}月${riverName}排班计划表.xls`
  // if(res.success){
      // const basePath = "http://192.168.88.136:7788/web/fileUpload/download";
      // window.location.href = basePath+ "?filePathUrl=" + res.data
      const data = await request({
        // url: `/fileUpload/download`,
        url: src + `/workplan/pbExport`,
        method: 'get',
        // params: {
        //   filePathUrl: res.data,
        //   contentType:"application/octet-stream"
        // },
        params,
        responseType: 'arraybuffer',
      })
      const url = window.URL.createObjectURL(new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))
      const link = document.createElement('a')
      // link.style.display = 'none'
      link.href = url
      link.setAttribute('download', str)
      // document.body.appendChild(link)
      link.click()
      // document.body.removeChild(link)
  // }
}

// 导入文件

export async function importTable(e) {
  // const res = await uploadFile(e,'pbjh');
  // let fileUrl = "";
  // if(res.success){
  //   const url = res.data.fileUrl
  //   fileUrl = url.split('/')[3].split('_')[0] + '.xls'
  // }
  // console.log(fileUrl)
  // return await request({
  //   method: "post",
  //   url: src + "/workplan/pbImport",
  //   params: {
  //     file: fileUrl
  //   },
  // })
  const [file] = [...e.target.files];
  const fd = new FormData();
  fd.append("file", file);
  // fd.append("whichOneFileUpload")
  // fd.append("isAbbreviation", 1)
  const token = window.sessionStorage.getItem("token");
  return await request({
    headers: {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
      token:'test',
    },
    url: src + "/workplan/pbImport",
    method: "post",
    data: fd,
  });
}

// 调用导入接口后根据年月和水库查询排班人员
export function selByImport(params) {
  return request({
    url: src + "/workplan/selectPBPersonByDateAndSx",
    params: params,
    method: 'get'
  })
}


// 获取用户数据
export function getUsers() {
  return request({
    url: "/user/getUserList",
    method: "get"
  })
}





