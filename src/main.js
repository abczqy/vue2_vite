import Vue from 'vue'
import Meta from 'vue-meta'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from './router/index'
import '@/assets/font.css'
import 'normalize.css/normalize.css'

import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

import Element from 'element-ui'
import { Loading } from 'element-ui'
import ElSelect from './components/element/select/src/select.vue'
import _ from 'lodash'
import { createPinia, PiniaVuePlugin } from 'pinia'

// elem基于断点检测
import 'element-ui/lib/theme-chalk/display.css'
// import i18n from './lang/index'

import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import './assets/swiper/swiper.css'
import './assets/swiper/swiper.min.js'

// import './permission' // permission control
import './utils/error-log' // error log
import './utils/time'

// 绑定事件总线
Vue.prototype.eventBus = new Vue()
Vue.prototype._ = _

import './utils/fullScreen'
import * as filters from './utils/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// import * as filters from './filters' // global filters
if (import.meta.env.MODE === 'development') {
  Vue.config.devtools = true
}

Vue.prototype.hasFuncton = function (functionCode) {
  const all_user_functions = JSON.parse(sessionStorage.getItem('user_function_list'))
  const hasFunction = all_user_functions.some(ele => ele.includes(functionCode))
  return hasFunction
}

// loading
// targetClass --遮挡对象选择器
// bgType --背景类型 blankbg:黑色背景
// targetObj 找不到返回 null
Vue.prototype.showLoading = function (targetObj, bgType) {
  if (typeof targetObj === 'undefined') {
    // targetObj = document.body
    return null
  }
  const curBgType = bgType
  if (typeof bgType === 'undefined') {
    bgType = 'blankbg'
  }
  // let targetObj = document.querySelector(targetClass)
  let load_options = {
    lock: false,
    text: '加载中...',
    // spinner: 'el-icon-loading',
    target: targetObj,
    fullscreen: false,
    body: false,
    customClass: 'comm_loading_mask'
  }
  if (curBgType === 'blankbg') {
    load_options = {
      lock: false,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.3)',
      target: targetObj,
      fullscreen: false,
      customClass: 'comm_loading_mask',
      body: false
    }
  }
  if (curBgType === 'user_load') {
    load_options = {
      lock: true,
      text: '加载中',
      background: 'rgba(0, 0, 0, 0.3)',
      target: targetObj,
      fullscreen: false,
      customClass: 'comm_loading_mask',
      body: false
    }
  }

  const loading = Loading.service(load_options)
  // setTimeout(function () {
  //   loading.close();
  // },6000)
  return loading
}

// 元素加载完回调
Vue.directive('lazydom', {
  // bind: function (el, binding, vnode) { },
  inserted: function (el, binding, vnode) {
    const context = vnode.context
    if (context && typeof context.lazyReadyCallback === 'function') {
      setTimeout(function () {
        context.lazyReadyCallback(el)
      }, 10)
    }
  },
  update: function (el) { },
  componentUpdated: function (el) { }
})
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})

Vue.component(ElSelect.name, ElSelect)

// 设置为开发环境或者生产环境(新引入组件使用,改为true)
Vue.config.productionTip = true

Vue.use(Meta, {
  refreshOnceOnNavigation: true
})

new Vue({
  el: '#app',
  router,
  // i18n,
  pinia,
  metaInfo() {
    return {
      title: sessionStorage.getItem('platformName')
      // title: store.state.meta.metaInfo.title,
      // meta: [
      //   {
      //     name: 'keywords',
      //     content: store.state.meta.metaInfo.keywords
      //   },
      //   {
      //     name: 'description',
      //     content: store.state.meta.metaInfo.description
      //   }
      // ]
    }
  },
  render: h => h(App)
})
