// 气象空气
export {
    getAir,             // 根据水库id，获取测站列表
    getAllAirList,      // 按条件查询数据-不分页。 ------ echarts
    getAirList,         // 按条件查询数据-分页。 -------- tables
    exportAirTable,     // table表导出
    getAirTableTitle,   // 通过id拿table    ----    表头数据
    getStatusByAir      // 通过id，获取测站状态。
} from './MeteorologicalAir'

// 水文水情
export {
    getWater,           // 根据水库id，获取测站详情列表
    getAllWaterList,    // 按条件获取数据--不分页  echarts
    getWaterList,       // 分页获取数据--分页  tables
    exportWaterTable,   // table 导出
    getStatusByWater,   // 根据水库id，获取测站状态
    getTableTitle,      // 根据测站id，获取table 标题名字
    getWaterVideo,      // 获取水文水情视频列表
} from './HydrologyAndWaterSituation'


// 安全检测

export {
    getSafe,            // 获取测站列表，根据水系id获取
    getAllSafeList,     // echarts air list 获取图表数据
    getSafeList,        // table air list table分页获取
    exportSafeTable,    // table 导出
    getStatusBySafe,    // 获取测站状态
    getSafeTableTitle,  // 获取表头

} from './SafetyMonitoring'

export {
    getQuality,             // 获取测站列表，根据水系id获取
    getAllQualityList,      // echarts 水质检测 list 获取图表数据
    getQualityList,         // table 水质检测 list table分页获取
    exportQualityTable,     // table 导出
    getStatusByQuality,     // 获取测站状态
    getQualityTableTitle    // 获取表头
} from './WaterQualityInspection'



export {
    getGate,
    getAllGateList,
    getGateList,
    exportGateTable,
    getStatusByGate,
    getGateTableTitle
} from './Gate'