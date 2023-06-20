/* eslint-disable no-unused-vars */
import { EventDispatcher, Raycaster, Vector2 } from "three";

// export interface TEventManagerParams {
//   dom: HTMLCanvasElement,
//   scene: Scene,
//   camera: Camera
// }

export class TEventManager extends EventDispatcher {
  mouse = new Vector2();
  //射线
  raycaster = new Raycaster();
  dom;
  scene;
  camera;

  constructor(params) {
    super()

    this.dom = params.dom
    this.scene = params.scene
    this.camera = params.camera

    const mouse = this.mouse
    const raycaster = this.raycaster
    const dom = params.dom

    let cacheObject = null

    //处理mousedown事件
    dom.addEventListener('mousedown', (e) => {
      //从相机角度发射一条三维的射线，判断与物体相交
      raycaster.setFromCamera(mouse, this.camera)
      const intersection = raycaster.intersectObjects(this.scene.children, false)
      
      // 全局触发
      this.dispatchEvent({
        type: "mousedown",
        intersection
      })

      if (intersection.length) {
        const obj = intersection[0].object
        
        obj.dispatchEvent({
          type: "mousedown"
        })
      }
    })
    // 处理mousemove事件
    dom.addEventListener('mousemove', (e) => {
      // console.log('mousemove',e);
      //将二维坐标转换成three能认识的坐标
      mouse.x = (e.offsetX / dom.offsetWidth) * 2 - 1
      mouse.y = -e.offsetY * 2 / dom.offsetHeight + 1
      // 选取物体
      raycaster.setFromCamera(mouse, this.camera)
      const intersection = raycaster.intersectObjects(this.scene.children, false)
      // console.log(intersection);
      // 全局触发
      this.dispatchEvent({
        type: "mousemove",
        intersection
      })

      if (intersection.length) {
        const obj = intersection[0].object
        if (obj !== cacheObject) {
          if (cacheObject) {
            cacheObject.dispatchEvent({
              type: 'mouseleave'
            })
          }
          obj.dispatchEvent({
            type: 'mouseenter'
          })
        } else if (obj === cacheObject) {
          obj.dispatchEvent({
            type: 'mousemove'
          })
        }
        cacheObject = obj
      } else {
        if (cacheObject) {
          cacheObject.dispatchEvent({
            type: 'mouseleave'
          })
        }
        cacheObject = null
      }
    })
    //处理mouseleave事件
    dom.addEventListener('mouseup', (e) => {
      //从相机角度发射一条三维的射线，判断与物体相交
      raycaster.setFromCamera(mouse, this.camera)
      const intersection = raycaster.intersectObjects(this.scene.children, false)
      // 全局触发
      this.dispatchEvent({
        type: "mouseup"
      })
      if (intersection.length) {
        const obj = intersection[0].object
        
        obj.dispatchEvent({
          type: "mouseup"
        })
      }
    })
    //处理click事件
    dom.addEventListener('click', (e) => {
      // console.log(e);
      
      //从相机角度发射一条三维的射线，判断与物体相交
      raycaster.setFromCamera(mouse, this.camera)
      const intersection = raycaster.intersectObjects(this.scene.children, false)
      // 全局触发
      this.dispatchEvent({
        type: "click",
        intersection
      })
      if (intersection.length) {
        const obj = intersection[0].object
        // console.log(obj);
        
        obj.dispatchEvent({
          type: "click"
        })
      }
    })
  }
}