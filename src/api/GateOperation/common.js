/*
 * @Author: L
 * @Date: 2022-07-07 15:02:26
 * @LastEditTime: 2022-07-12 14:06:55
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import request from '@/utils/request';
const src = "/reservoir-sluice/web";
const video = "/reservoir-videoimages/web";
const system = "/reservoir-sm/web";
const zk = "/management-service/web";
/**
 * 获取视频信息
 */

export async function getVideo(params) {
    return await request({
        method: 'get',
        url: src + '',
        params
    })
}

/**
 * 闸门控制
 */

export async function controlGate(params) {
    return await request({
        method: "get",
        url: src + "/sluice/gate/get/operation",
        params
    })
}

/**
 * 设置闸门预设
 */

export async function setGateOpen(params){
    return await request({
        method:'get',
        url:src + '/sluice/gate/operation/preset',
        params
    })
}


/**
 * 批量获取视频信息
 */

export async function getVideoList(params){
    return await request({
        method:"get",
        url:video + '/video/get/gate/video/info',
        params
    })
}

/**
 * 获取闸门最新信息
 */
export async function getNewGateInfo(params){
    return await request({
        method:"get",
        url:src + "/sluice/gate/get/gate/info",
        params
    })
}