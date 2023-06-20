import {
    getCapacityList, // 获取库容曲线列表
    importCapacity,  // 获取库容曲线列表
    exportCapacity,  // 导出库容曲线列表
    addCapacity,     // 确定导入
} from './StorageCurve.js'


import {
    getFeatureList, // 获取分页列表
    getFeatureInfo, //特征数据详情页
    delFeatureInfo, //删除特征数据
    changeOrAddFeatureInfo, //新增、修改
} from './FeatureData.js'


export {
    // 库容曲线
    getCapacityList,        // 获取库容曲线列表
    importCapacity,         // 获取库容曲线列表
    exportCapacity,         // 导出库容曲线列表
    addCapacity,            // 确定导入
    // 特征数据
    getFeatureList,         // 获取分页列表
    getFeatureInfo,         //特征数据详情页
    delFeatureInfo,         //删除特征数据
    changeOrAddFeatureInfo, //新增、修改
}