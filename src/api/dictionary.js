/*
 * @Author: L
 * @Date: 2022-06-06 09:48:41
 * @LastEditTime: 2022-06-27 09:30:37
 * @LastEditors: Do not edit
 * @Description: 字典接口
 */
import request from '@/utils/request'
// const src = "http://192.168.88.135:6061/web"
const src = '/management-service/web'
// const src = ""

// 字典查询 分页查询
export function geiDictionaries(data) {
    return request({
        method: "get",
        // url: src + "/dictionaries/getDictionariesList",
        url: src + "/dictionaries/getDictionariesTypesList",
        params: data
    })
}

// 字典项分页查询
export  function getDictionaryTypes(data) {
    return  request({
        method: "get",
        url:src + "/dictionaries/getDictionariesList",
        params: data
    })
}

// 获取所有字典列表 
export function getTypeList() {
    return request({
        method: "get",
        url:src + "/dictionaries/getDictionariesTypesListAll"
    })
}

// 新增字典项
export function addInfo(data) {
    return request({
        url:src + "/dictionaries/insertZdInfo",
        method: "post",
        data
    })
}

// 通过id查询
export function getInfoById(id) {
    return request({
        url:src + "/dictionaries/getDictionariesTypesInfo",
        method: "get",
        params: { id }
    })
}

// 删除
export function deleteInfo(id) {
    return request({
        url:src + "/dictionaries/deleteDictionaries",
        method: "delete",
        params: { id }
    })
}

// 更新
export function updateInfo(data) {
    return request({
        url:src + "/dictionaries/updateZdInfo",
        method: "put",
        data
    })
}

// 查询巡检下拉框字典值
export function getXjXlDictionariesList(params) {
    return request({
        url:src + "/dictionaries/queryXjXlDictionariesList",
        method: "GET",
        params
    })
}