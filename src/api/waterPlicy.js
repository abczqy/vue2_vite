/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2022-03-24 18:07:41
 * @LastEditors: Do not edit
 * @Description: 巡检任务接口
 */
import request from "@/utils/request";
// const temp = '/reservoir-omm/web'
const temp = "/reservoir-we/web";

export function addTask(data) {
  return request({
    url: temp + "/waterpolitics/add",
    method: "post",
    data
  });
}

export function deleteTask(id) {
  return request({
    url: temp + "/waterpolitics/delete",
    method: "put",
    params: {
      id
    }
  });
}

export function getTaskList(data) {
  return request({
    url: temp + "/waterpolitics/list",
    method: "get",
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      count: data.count,
      orderField: data.orderField,
      orderType: data.orderType,
      name: data.name,
      type: data.type,
      reservoirId: data.reservoirId
    }
  });
}

export function getDetails(data) {
  return request({
    url: temp + "/waterpolitics/list/info",
    method: "get",
    params: {
      id: data.id
      // source:data.source
    }
  });
}

export function editTask(data) {
  return request({
    url: temp + "/waterpolitics/update",
    method: "put",
    data
  });
}

export function closeTask(id) {
  return request({
    url: temp + `/opatrolTask/closePatrolTask/`,
    method: "put",
    params: {
      id
    }
  });
}

// 删除文件

export function deleteTaskFile(id) {
  return request({
    url: temp + "/waterpolitics/deleteFile",
    method: "delete",
    params: {
      id
    }
  });
}

// 获取巡检人员 /role/getUserByRoleName

export function getInspection(roleName) {
  return request({
    url: temp + `/role/getUserByRoleName`,
    method: "get",
    params: {
      roleName
    }
  });
}
