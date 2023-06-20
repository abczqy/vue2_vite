import {  PerspectiveCamera, Scene, Vector3, WebGLRenderer, MOUSE, Color, Fog } from "three";
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { TEventManager } from './TEventManager'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { spotLight } from './TLights'

export class TEngine {
  dom;
  renderer;
  scene;
  camera;
  eventManager;
  transformControls

  constructor(dom) {
    // console.log(dom);
    this.dom = dom;
    // 渲染器
    const renderer = new WebGLRenderer({
      // 透明
      // alpha:true
      //抗锯齿
      antialias:true,
    })

    // 开启模型对象的局部剪裁平面功能
    renderer.localClippingEnabled = true;
    // css2d渲染器
    // const CSS3LabelRenderer = new CSS3DRenderer();
    const CSS2LabelRenderer = new CSS2DRenderer();
    //场景
    const scene = new Scene()
    scene.background = new Color( 0xdddddd );
		// scene.fog = new Fog( 0xa0a0a0, 10, 500 );
    // scene.background = new Color(0xbfe3dd);
    //透视相机
    const camera = new PerspectiveCamera(45, dom.offsetWidth / dom.offsetHeight, 1, 1000)

    camera.position.set(180, 180, 180)
    camera.lookAt(new Vector3(0, 0, 0))
    camera.up = new Vector3(0, 1, 0)

    // 渲染器尺寸
    renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)
    CSS2LabelRenderer.setSize(dom.offsetWidth, dom.offsetHeight, true)
    CSS2LabelRenderer.domElement.style.pointerEvents = 'none';
    CSS2LabelRenderer.domElement.style.position = 'absolute';
    // 相对标签原位置位置偏移大小
    CSS2LabelRenderer.domElement.style.top = '0px';
    CSS2LabelRenderer.domElement.style.left = '0px';

    // 性能监视器
    // const stats = Stats()
    // const statsDom = stats.domElement
    // statsDom.style.position = 'fixed'
    // statsDom.style.top = '0'
    // statsDom.style.left = 'unset'
    // statsDom.style.right = '5px'

    // OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement)
    // 设置鼠标控制，释放左键，因为可能要选中拖动物体
    orbitControls.mouseButtons = {
      LEFT: null,                     //左键
      MIDDLE: MOUSE.DOLLY,            //中键
      RIGHT: MOUSE.ROTATE             //右键
    }

    //初始变换控制器，变换器需要依附一个场景中的物体
    let flag = false  //用于标记是变换物体，还是拾取物体
    const transformControls = new TransformControls(camera, renderer.domElement)
    transformControls.addEventListener('mousedown', (e) => {
      console.log(e);
      flag = true 
    })
    scene.add(transformControls)

     //renderer的canvas对象添加鼠标事件
    
    const eventManager = new TEventManager({
      dom: renderer.domElement,
      scene: scene,
      camera: camera
    })
    let cacheObject= null  //物体进行缓存
    eventManager.addEventListener('mousemove', (e) => {
      if (e.intersection.length) {
        const obj = e.intersection[0].object

        //对比新旧两个物体
        if (obj === cacheObject) {
          return
        }else if (obj !== cacheObject && cacheObject) {
          cacheObject.material.color.multiplyScalar(0.5)
        }
        
        if (obj.material) {
          obj.material.color.multiplyScalar(2)
          cacheObject = obj
        }
        
      } else {
        if (cacheObject) {
          cacheObject.material.color.multiplyScalar(0.5)
        }
        cacheObject = null
      }
    })

    eventManager.addEventListener('click', (e) => {
      //判断flag如果是true，表明为变换阶段，什么都不做
      if (flag) {
        flag = false 
        return false
      }
      // 拾取物体
      console.log('e.intersection',e.intersection);
      if (e.intersection.length) {
        const obj = e.intersection[0].object
        //判断是否是控制器，是的话移除，避免选到自己，造成bug。也可以先移除控制器，选中后再添加回来
        if (obj.type === "TransformControlPlane") {
          transformControls.detach()
          scene.remove(transformControls)
        } else {
          scene.add(transformControls)
          //判断是否是一个group
          // transformControls.attach(obj.parent instanceof Group ? obj.parent : obj)
          transformControls.attach(obj)
        }
        
      } else {
        transformControls.detach()
        scene.remove(transformControls)
      }
    })

    // 渲染函数
    const renderFun = () => {
      renderer.render(scene, camera)
      spotLight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10,
      )
      // CSS2LabelRenderer.render(scene, camera)
      // stats.update()
      requestAnimationFrame(renderFun)
    }

    renderFun()

    dom.appendChild(renderer.domElement)
    dom.appendChild(CSS2LabelRenderer.domElement)
    // dom.appendChild(statsDom)

    this.renderer = renderer
    this.scene = scene
    this.camera = camera
  }

  // 添加物体的方法
  addObject(...objects) {

    objects.forEach((item) => {
      this.scene.add(item)
    })
  }
}