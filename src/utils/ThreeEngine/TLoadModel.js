/*
 * @Author: L
 * @Date: 2022-05-16 12:36:22
 * @LastEditTime: 2022-07-04 16:10:50
 * @LastEditors: Do not edit
 * @Description: 模型加载
 */
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
// import { Group } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const gltfLoader = new GLTFLoader()
// const mtlLoader: MTLLoader = new MTLLoader()

// export const framePromise = new Promise<Mesh>((resolve, reject) => {
//   objLoader.loadAsync('/xxx.obj').then(group => {
//     const frame: Mesh = group.children[0] as Mesh
//     (frame.material as Material).dispose()  //性能优化，清除之前的缓存
//     frame.material = new MeshStandardMaterial({
//       map: xxx,              //这里的三个xxx都是从texture导入的贴图
//       roughnessMap: xxx,
//       displacementMap: xxx
//     })
//     resolve(frame)
//   }).catch(err => {
//     reject(err)
//   })
// })

//另一种写法
export const getFrame = async function () {
  const group = await gltfLoader.loadAsync('/model/hq_gate.gltf')
  // console.log(group);
  // const frame = group.children[0] 
  // frame.material.dispose()  //性能优化，清除之前的缓存
  group.scene.position.set(0,0,100)
  group.scene.scale.set(10,10,10)
  return group.scene
  // if (group instanceof Group) {
  //   const frame = group.children[0] 
  //   frame.material.dispose()  //性能优化，清除之前的缓存
  //    //可从texture导入贴图
  //   // frame.material = new MeshStandardMaterial({
  //   //   map: xxx,             
  //   //   roughnessMap: xxx,
  //   //   displacementMap: xxx
  //   // })

  //   return frame
  // } else {
  //   // console.error(group);
  //   return null
  // }
}


