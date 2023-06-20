import request from '@/utils/request';
const src = "/reservoir-er/web";
// const src = "";
// 工程整改分页列表
export async function getEngineerList(params) {
    return await request({
        method: 'get',
        url: src + '/engineering/change/page',
        params
    })
}

// 删除
export async function delEngineer(id) {
    return await request({
        method: "delete",
        url: src + "/engineering/change/delete",
        params: { id }
    })
}

// 添加或修改
export async function addOrUpdateEngineer(data) {
    return await request({
        method: "post",
        url: src + "/engineering/change/add/or/update",
        data
    })
}

// 查看详情
export async function getEngineerInfo(id) {
    return await request({
        method: "get",
        url: src + '/engineering/change/info',
        params: { id }
    })
}

// 工程整改地图分页列表
export async function getEngineerListForMap(id){
    return await request({
        method:"get",
        url:src + "/engineering/change/list",
        params:{id}
    })
}