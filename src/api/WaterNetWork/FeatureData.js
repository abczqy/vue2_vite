import request from '@/utils/request';
const src = "/management-service/web";
// const src = "";

// 特征数据分页列表
export async function getFeatureList(params) {
    return await request({
        method: "get",
        url: src + "/dam/features/page",
        params
    })
}

// 特征数据详情页
export async function getFeatureInfo(id) {
    return await request({
        method: "get",
        url: src + "/dam/features/info",
        params: { id }
    })
}   


// 删除特征数据
export async function delFeatureInfo(id){
    return await request({
        method: "delete",
        url: src + "/dam/features/info",
        params: { id }
    })
}


// 新增、修改
export async function changeOrAddFeatureInfo(data){
    return await request({
        method: "post",
        url: src + "/dam/features/add/or/update",
        data
    })
}