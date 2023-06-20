import request from '@/utils/request'
const src = '/reservoir-sm/web'


// 获取所有用户数据
export async function getAllUser() {
    return await request({
        url: src + "/sysUser/getAllUser",
        method: "get"
    })
}

// 获取水库下用户数据
export async function getUserByReservoirId(reservoirId) {
    return await request({
        url: src + '/sysUser/reservior/user',
        method: 'get',
        params: {
            reservoirId
        }
    })
}


// 分页获取用户列表
export async function getUser(params) {
    return await request({
        url: src + "/sysUser/getSysUser",
        method: "get",
        params
    })
}

// 分页通过角色id查询用户列表
export async function getUserByRoleId(params) {
    return await request({
        url: src + "/role/getRoleUser",
        method: "get",
        params
    })
}

// 修改用户信息
export async function updateUser(data) {
    return await request({
        url: src + "/sysUser/updateUser",
        method: "post",
        data
    })
}

// 根据id获取用户信息
export async function getUserById(id) {
    return await request({
        url: src + "/sysUser/getSysUserInfo",
        method: "get",
        params: { id }
    })
}


// 新增用户信息
export async function addUser(data) {
    return await request({
        url: src + "/sysUser/addUser",
        method: "post",
        data
    })
}

// 删除用户
export async function delUser(id) {
    return await request({
        url: src + "/sysUser/deleteUser",
        method: "get",
        params: { id }
    })
}

// 获取角色信息
export async function getRole() {
    return await request({
        url: src + "/role/selectAll",
        method: "get",
    })
}

// 新增 、 修改角色
export async function changeRole(data) {
    return await request({
        url: src + "/role/saveOrUpdate",
        method: "post",
        data
    })
}
// 按角色昵称查询用户
export async function getRoleByName(roleName) {
    return await request({
        url: src + '/role/getUserByRoleName',
        method: "get",
        params: { roleName }
    })
}


// 删除角色
export async function deleteRole(id) {
    return await request({
        url: src + "/role/delete",
        method: "delete",
        params: { id }
    })
}


// 按id查询角色
export async function getRoleById(id) {
    return await request({
        url: src + "/role/getRoleInfo",
        method: "get",
        params: { id }
    })
}



// 获取部门信息
export async function getDept() {
    return await request({
        url: src + "/sysDepartment/getDepartmentTree",
        method: "get"
    })
}

// 新增部门
export async function addDept(data) {
    return await request({
        url: src + "/sysDepartment/addDepartment",
        method: "post",
        data
    })
}

// 删除部门
export async function delDept(id) {
    return await request({
        url: src + "/sysDepartment/deleteDepartment",
        method: "get",
        params: { id }
    })
}

// 获取用户管理数据
export async function getApplicationInfo() {
    return await request({
        url: src + "/role/getApplicationAll",
        method: "get"
    })
}

// 在角色下面新增用户
export async function insertUserRoleBatch(data) {
    return await request({
        url: src + "/role/insertUserRoleBatch",
        method: "post",
        data
    })
}

// 删除
export async function delUserRole(params) {
    return await request({
        url: src + "/role/deleteUserRole",
        method: "get",
        params
    })
}



// 获取权限表单数据表
export async function getAuthorityTable(params) {
    return await request({
        url: src + "/role/roleAuthorInfo",
        // url: src + "/role/getApplicationAll",
        method: "get",
        params
    })
}

// 权限保存
export async function saveAuthorityTable(data) {
    return await request({
        url: src + "/role/updateRoleJ",
        method: "post",
        data
    })
}
