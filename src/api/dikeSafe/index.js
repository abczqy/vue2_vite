export {
    getStatisticsAnnualList,        // 获取年度值
    getStatisticsList,              // 获取特征值
    exportStatisticsAnnualList,     // 年度导出
    exportStatisticsList            // 特征导出
} from './TestReport'



export {
    getDamStationList,              // 通过水库id和大坝id拿取手风琴列表
    getDamCommonBookmark,           // 数据分析-大坝关联测站页签
} from './common'


export {
    getUpliftedPressureEcharts,     // 数据分析-扬压力数据标题
    getUpliftedPressureTable,       // 数据分析-扬压力数据表格
    getUpliftedPressureTableTitle   // 数据分析-扬压力图形列表
} from './upliftedPressure'


export {
    getDisplacementTableTitle,      // 数据分析-大坝位移数据标题
    getDisplacementTable,           // 数据分析-大坝位移数据表格
    getDisplacementEcharts          // 数据分析-大坝位移图形列表
} from './DisplacementView'