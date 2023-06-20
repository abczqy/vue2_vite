/*
 * @Author: L
 * @Date: 2022-05-16 12:36:22
 * @LastEditTime: 2022-07-05 15:19:03
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import {
  AmbientLight,
  PointLight,
  SpotLight,
  DirectionalLight,
  HemisphereLight
} from 'three'

export const lightsList = []

// const ambientLight = new AmbientLight('rgb(255, 255, 255)', 0.3)

/**
 * 光照的颜色，实际是光的颜色与材质的颜色的乘积
 * 例如AmbientLight('rgb(255, 255, 255)', 1)  0 - 255  转换成 0 - 1
 * 光照 255 255 255   -> 1,1,1
 * 物体 150 150 150   -> 0.59,0.59,0.59
 * 光照强度              1,1,1
 * 看到的颜色  0.59,0.59,0.59
*/

// //点光源
// export const pointLight= new PointLight('rgb(255,0,0)', 0.7, 50, 0.1)
// pointLight.position.set(20,60, 20)

//聚光灯
// export const spotLight = new SpotLight('rgb(255,255,255)', 1, 500, Math.PI / 180 * 30, 0, 0)
// spotLight.position.set(-10, 540, -80)
// spotLight.castShadow = true  //灯光产生阴影

// const directionalLight1 = new DirectionalLight( 0xffeeff, 0.8 );
// directionalLight1.position.set( 1, 1, 1 );


// const directionalLight2 = new DirectionalLight( 0xffffff, 0.8 );
// directionalLight2.position.set( - 1, 0.5, - 1 );


// const ambientLight = new AmbientLight( 0xffffee, 0.25 );


//要改变聚光灯朝向，需要设置他的target(不然默认看着0，0，0)，此时辅助工具朝向不会改变
//需要target调用 updateMatrix  updateMatrixWorld 去更新本地矩阵及世界矩阵
// spotLight.target = xxx

export const spotLight = new SpotLight(0xffa95c, 4)
// spotLight.position.set(-10, 540, -80)
spotLight.castShadow = true  //灯光产生阴影

export const hemisphereLight = new HemisphereLight(0xffeeb1, 0x080820, 4)


lightsList.push( hemisphereLight )
// lightsList.push( )
