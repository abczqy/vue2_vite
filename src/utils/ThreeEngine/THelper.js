/*
 * @Author: L
 * @Date: 2022-05-16 12:36:22
 * @LastEditTime: 2022-07-05 15:36:01
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import {
  AxesHelper,
  GridHelper,
  PointLightHelper,
  SpotLightHelper
} from 'three'
import { pointLight, spotLight } from './TLights';

export const helperList = []

const axesHelper = new AxesHelper(500)
//发射射线的方法置空，避免被拾取到
axesHelper.raycast = () => { } 

// const gridHelper = new GridHelper(500, 20, 'rgb(200, 200, 200)', 'rgb(100, 100, 100)')
// gridHelper.raycast = () => { } 

//光源辅助
// const pointLightHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color)
// pointLightHelper.raycast = () => { } 

// const spotLightHelper = new SpotLightHelper(spotLight, spotLight.color)
// spotLightHelper.raycast = () => { } 

helperList.push(axesHelper)