<template>
  <div id="homeCesiumContainer" class="map" />
</template>

<script>
const Cesium = window.Cesium

export default {
  name: 'MapTest',
  data() {
    return {
      model_info: {},
      // 展示摄像头
      display_camera: false,
      camera_id: '', // 视频组件所需的测站id
      // 模型展示
      display_model: false,
      markPerson: false, // 人员标点flag
      personList: [], // 人员列表
      typeId: '', // 测站类型
      reservoirId: '', // 水库ID
      // showtype: 'home_map',
      viewer: null,
      view_mode: 'area', // 区域(area)或水库(reservoir)视图
      text_show_small: false, // 测值 是否显示
      cesium_AccessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzY2UxMjhkMS05MzIyLTRlMmEtODFhMS04NDFlOGY4NjZlYzciLCJpZCI6ODMwOTUsImlhdCI6MTY0NTMzMTEwMX0.UE8WS_mNcoDDF80mbzFu35fCLV9GHeTQjGPZP76Y17I',
      tianditu_key: 'c80cefcf92762c1b676aabc03701de8b', // dev:d6c89e85c65425b41254bf34d49a062a

      reservoir_list: [],
      siteList: [],
      // 指挥中心位置
      controlCenter: {
        longitude: 102.00325012,
        latitude: 26.92757984,
        height: 36000
      },
      // 当前水库位置
      cur_reservoir: {
        longitude: 102.00325012,
        latitude: 26.92757984,
        height: 2800
      }
    }
  },
  mounted() {
    this.mapInit()
  },
  created() {
    const _this = this
    window.map_loaded = _this.mapLoaded
    window.map_Marker = _this.map_Marker
    window.enter_reservoir_info = _this.enter_reservoir_info
    window.show_stations = _this.show_stations
    window.show_model = _this.show_model
    window.change_show_site_val_mode = _this.change_show_site_val_mode
    window.show_camera = _this.show_camera
  },
  methods: {
    mapInit() {
      // 默认定位中国
      // Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90, -20, 110, 90);
      Cesium.Ion.defaultAccessToken = this.cesium_AccessToken
      this.viewer = new Cesium.Viewer('homeCesiumContainer', {
        infoBox: false,
        selectionIndicator: false,
        navigation: false,
        animation: false,
        shouldAnimate: false,
        timeline: false,
        baseLayerPicker: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        navigationHelpButton: false,
        imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
          // 影像底图
          url: 'https://{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + this.tianditu_key,
          subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
          layer: 'tdtImgLayer',
          style: 'default',
          format: 'image/jpeg',
          tileMatrixSetID: 'GoogleMapsCompatible', // 使用谷歌的瓦片切片方式

          minimumLevel: 1,
          maximumLevel: 18, // max 18

          show: true
        })
      })
      this.viewer.clock.shouldAnimate = false
      // 抗锯齿
      this.viewer.scene.fxaa = true
      this.viewer.scene.postProcessStages.fxaa.enabled = true
      // 水雾特效
      this.viewer.scene.globe.showGroundAtmosphere = true

      this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
      this.viewer._cesiumWidget._creditContainer.style.display = 'none' // 隐藏版权
      this.viewer.scene.globe.show = true

      // 缩放限制
      this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 500
      this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = 160000

      // this.viewe.entities
      // this.viewer.camera.zooTo

      // this.viewer.imageryLayers.removeAll(true); //删除所有底图

      // this.map_init_bg()
      // this.viewer.camera.setView({
      //     destination:position,
      //     orientation:{
      //         heading:Cesium.Math.toRadians(0),
      //         pitch:Cesium.Math.toRadians(-90),
      //         roll:0
      //     }
      // })

      // 开启 tick
      this.viewer.clock.shouldAnimate = true
      // 每次旋转的弧度 越小越慢
      var angle = Cesium.Math.toRadians(Math.PI * 1.0)
      // 旋转次数 用来控制停止
      var rotate_num = 0
      const _viewer = this.viewer
      function onTickCallback() {
        _viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, angle)
        // 以下用来控制 停止
        rotate_num++
        // 110 次旋转一周
        if (rotate_num === 60) {
          // 结束旋转
          _viewer.clock.onTick.removeEventListener(onTickCallback)
          // 加载结束定位
          window.map_loaded()
        }
      }
      // 利用时钟进行监听
      this.viewer.clock.onTick.addEventListener(onTickCallback)
    },
    mapLoaded() {
      // 加载结束后定位
      const position = Cesium.Cartesian3.fromDegrees(
        this.controlCenter.longitude,
        this.controlCenter.latitude,
        this.controlCenter.height
      )
      this.viewer.camera.flyTo({
        destination: position,
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-90),
          roll: 0
        },
        duration: 6,
        complete: () => {
          // window.map_Marker()
          // this.showRiverPath()
          // //添加交通图层
          // let LRRL_provider = new Cesium.WebMapServiceImageryProvider({
          // 	url: "http://gisserver.tianditu.gov.cn/TDTService/wfs",
          // 	layers: "TDTService:LRDL",//LRRL,LRDL
          // 	parameters: {
          // 		service: "WMS",
          // 		format: "image/png",
          // 		transparent: true,
          // 		style: "default"
          // 	}
          // });
          // let LRRL_layer = this.viewer.imageryLayers.addImageryProvider(LRRL_provider,22);
          // LRRL_layer.alpha = 0.9;
          // LRRL_layer.hue = 38;
          // LRRL_layer.contrast = -1.2;
          // LRRL_layer.brightness = 2.0;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%
}
</style>
