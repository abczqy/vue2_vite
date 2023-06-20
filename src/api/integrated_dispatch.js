// 综合调度
import request from '@/utils/request'
// 测站类型
export function getStationType() {
	return request({
		// url: `/ssurveystation/getStationType`,
		url: `/screen/station/type`,
		method: 'get'
	})
}

// 测站信息
export function getStationList(stationType_id,typeId) {
	return request({
		url: `/dispatch/station/list`,
		method: 'get',
		params: { 
			'id': stationType_id,
			'typeId':typeId
		}
	})
}


