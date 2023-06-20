/*
 * @Author: L
 * @Date: 2022-03-23 19:31:20
 * @LastEditTime: 2022-06-22 13:46:52
 * @LastEditors: Do not edit
 * @Description: 附件API
 */
import request from '@/utils/request';
import extension from '@/utils/extension';
const temp = "/reservoir-store"
export function deleteFileMethod(path) {
  return request({
    method: 'get',
    url: '/reservoir-store/removefile?filePath=' + path
  })
}

// 文件下载,参数为一个对象，对象包含filePathUrl,name
export async function downLoadFile({ filePathUrl, name, contentType }) {
  console.log(filePathUrl, name, contentType)
  const data = await request({
    method: "get",
    url: temp + "/file/download",
    params: { filePath:filePathUrl },
    responseType: 'arraybuffer',
  })
  console.log(data, 123)
  const src = '.' + name.split('.').reverse()[0];
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  link.setAttribute("download", name);
  link.click();
}

function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return 'data:application/png;base64,' + window.btoa(binary);
}


// 如果是图片类型，可以拼接 data:image/jpeg;base64,或data:image/png;base64,

export async function getImageBase64(filePathUrl) {
  const data = await request({
    method: "get",
    url: "/fileUpload/download",
    params: { filePathUrl },
    responseType: "arraybuffer"
  })
  return _arrayBufferToBase64(data)
}


// 下载excel
export async function downLoadFileExcel({ filePathUrl, name }) {

  const data = await request({
    method: "get",
    url: "/fileUpload/downloadExcel",
    params: { filePathUrl, contentType: "application/octet-stream" },
    responseType: 'arraybuffer',
  })
  const src = '.' + name.split('.').reverse()[0];
  const type = extension[src]
  const blob = new Blob([data], { type });
  let fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a")
  link.setAttribute("href", fileUrl);
  link.setAttribute("download", name);
  link.click();
}



// 文件上传
export async function uploadFile(e, name) {
  const [file] = [...e.target.files];
  const fd = new FormData();
  fd.append("file", file);
  fd.append("whichOneFileUpload", name)
  fd.append("isAbbreviation", 1)
  const token = window.sessionStorage.getItem("token");
  return await request({
    headers: {
      "Content-Type": "multipart/form-data",
      token,
    },
    url: process.env.VUE_APP_APPLICATION_URL + "/reservoir-store/file/uploadfile",
    method: "post",
    data: fd,
  });
}

