const temp = '/management-service/web';
import request from '@/utils/request';



export async function getStorageCurveMessage(reservoirId){
    return await request({
        method:"get",
        url:temp + "/tab/get/capacity",
        params:{
            reservoirId
        }
    })
}