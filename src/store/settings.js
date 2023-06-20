/*
 * @Author: L
 * @Date: 2022-03-09 19:14:11
 * @LastEditTime: 2023-01-04 17:15:37
 * @LastEditors: Do not edit
 * @Description: 状态存取
 */
import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
import Cookies from 'js-cookie'

import { Message } from 'element-ui'
import langStorage from '@/lang/lang'
import { dictdata_list } from '@/api/common'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  directions: [],
  // 默认显示(其他页面受影响)
  isFold: true,
  //隐藏二级菜单、tree组件等
  showAsides: true,
  // 大屏视频组件全屏
  isFull: false,
  // 大屏右下角视频轮播
  isFinish: false,
  // 大屏右下角视频列表长度
  hasVideos: false,
  //轮播延时
  delay_sec: Cookies.get('autoPlay'),
  // 巡检记录id
  recordId: ''
}

const mutations = {
  SET_RECORDID: (state, val) => {
    state.recordId = val
  },
  // 更改状态
  CHNAGE_ASIDE: (state, val) => {
    state.showAsides = !state.showAsides
 
  },
  // 视频全屏状态
  CHANGE_VIDEO: (state, val) => {
    state.isFull = val
  },
  //改变轮播状态
  PLAY_FINISHED: (state, val) => {
    state.isFinish = val
  },
  //是否有视频
  HAS_VIDEO: (state, val) => {
    state.hasVideos = val
  },
  SET_AUTOPLAY: (state, data)=>{
    state.delay_sec = data
    Cookies.set('autoPlay', data)
  },
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  GET_DIRECTIONS: (state, data) => {
    // 获取类型
    state.directions = data
  },
  SHOW_SIDEBAR: (state, data)=>{
    state.isFold = !state.isFold
  }
}

const actions = {
  save_record({ commit }, data){
    commit('SET_RECORDID', data)
  },
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
  // 获取方向类型
  async getDirections({ commit }) {
    const curLanguageCode = langStorage.getLang()
    const result = await dictdata_list('user_know_directions', curLanguageCode)
    commit('GET_DIRECTIONS', result.data)
  },
  // 折叠/显示，控制bottom-mL
  showSidebar({ commit }) {
    commit('SHOW_SIDEBAR')
  },

  //展开，收起侧面 CHNAGE_ASIDE
  showAside({ commit }){
    commit('CHNAGE_ASIDE')
  },
  // 更改视频全屏状态
  change_video_status({ commit }, data) {
    commit('CHANGE_VIDEO', data)
  },
  // 更改视频轮播状态
  auto_play({ commit }, data) {
    commit('PLAY_FINISHED', data)
  },
  // 视频列表长度
  change_list({ commit }, data) {
    commit('HAS_VIDEO', data)
  },
  //更改轮播时间
  change_auto_time({ commit }, data) {
    commit('SET_AUTOPLAY', data)
  },
}

// //getters可以认为是store的计算属性
// getters: {
// 	list(state) {
// 		return state.list
// 	}
// },

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

