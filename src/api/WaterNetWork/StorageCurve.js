import request from '@/utils/request';
import extension from '@/utils/extension';
import {formatExcelDate} from "@/utils/time";
// const src = "/management-service/web";
const temp = "/management-service/web";
// const src = ""

// 获取库容曲线列表
export async function getCapacityList(reservoirId) {
    return await request({
        method: "get",
        url: temp + "/capacity/get/info",
        params: {
            reservoirId
        }
    })
}

// 导入库容曲线
export async function importCapacity(e) {
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
      url: temp + "/capacity/excel/import",
      method: "post",
      data: fd,
    });
  }
// 导出库容曲线列表
export async function exportCapacity(reservoirId, name) {
    const data = await request({
        method: "get",
        url: temp + "/capacity/excel/download",
        params: { reservoirId },
        responseType: 'arraybuffer',
    });
    const src = '.xls';
    const type = extension[src]
    const blob = new Blob([data], { type });
    let fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a")
    link.setAttribute("href", fileUrl);
    const date = formatExcelDate()
    link.setAttribute("download", date + name + '库容曲线.xls');
    link.click();
}

/**
 * 根据导入文件生成的数据，确定数据是否确定导入。
 * @param {Array} data capacity 库容  waterLevel 水位
 * @returns
 */
export async function addCapacity(data) {
    return await request({
        method: "post",
        url: temp + "/capacity/add",
        data
    })
}
