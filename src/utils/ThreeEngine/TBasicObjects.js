/*
 * @Author: L
 * @Date: 2022-05-16 12:36:22
 * @LastEditTime: 2022-07-05 13:36:44
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
// import { pic } from './TTextures';
import {
  Mesh,
  BoxBufferGeometry,
  MeshStandardMaterial,
  Color,
  // SphereBufferGeometry,
  // Object3D,
  // Points,
  // Line,
  // PlaneBufferGeometry,
  // Color
} from 'three'
import { pic } from './TTextures'

export const objectsList = []

//舞台
const stage = new Mesh(
  new BoxBufferGeometry(200, 10, 200),
  new MeshStandardMaterial({
    color: 'rgb(0, 75, 75)',
    roughness: 0,
    // 设置深度渲染及写入缓冲区，配合 mesh.renderOrder = 0 可解决有深度引起的闪烁
    // depthTest: false, //默认值true，表示进行深度测试.
    // depthWrite: false, //不写入深度缓冲区数据
  })
)
stage.position.y = -5
stage.castShadow = true
stage.receiveShadow = true //地面接收阴影

// 立方体
const box = new Mesh(
  new BoxBufferGeometry(40, 40, 40),
  new MeshStandardMaterial({
    // map: pic
    color: 'red',
    // metalness: 1,
    // roughness: 0.3
  })
)
box.position.set(0,20,0)
// box.position.y = 40
// box.position.z = 80
box.castShadow = true //物体产生阴影
box.receiveShadow = true

//鼠标移入移出改变颜色
// box.addEventListener('mouseenter', () => {
//   box.material.color = new Color('green')
// })
// box.addEventListener('mouseleave', () => {
//   box.material.color = new Color('white')
// })

// box.addEventListener('mousedown', () => {
//   (box.material as MeshStandardMaterial).color = new Color('red')
// })
// box.addEventListener('mouseup', () => {
//   (box.material as MeshStandardMaterial).color = new Color('red')
// })
// box.addEventListener('click', () => {
//   (box.material as MeshStandardMaterial).color = new Color('white')
// })


//贴图
// const plane= new Mesh(
//   new PlaneBufferGeometry(192, 108),
//   new MeshStandardMaterial({
//     map: pic
//   })
// )

// plane.position.y = 45
// plane.scale.set(0.3, 0.3, 0.3)

objectsList.push(box)
/**
 * Mesh 是网格对象(还有 points line)，需要两个参数
 * params1: 几何
 * params2: 网格标准材质
 *
 **/

// const box: Mesh = new Mesh(
//   new BoxBufferGeometry(10, 10, 10),
//   new MeshStandardMaterial({color:'rgb(255, 0, 0)'})
// )

// const box: Line = new Line(
//   new BoxBufferGeometry(10, 10, 10),
// )
// box.position.x = 10

// const sphere: Mesh = new Mesh(
//   new SphereBufferGeometry(5),
//   new MeshStandardMaterial()
// )
// sphere.position.x = -10

