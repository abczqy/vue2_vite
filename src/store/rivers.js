/*
 * @Author: L
 * @Date: 2022-03-17 13:40:15
 * @LastEditTime: 2022-03-17 18:14:44
 * @LastEditors: Do not edit
 * @Description: 存储水系信息
 */
import Cookies from 'js-cookie'

const state = {
    riverInfo: {
      id:Cookies.get('riverId'),
      // name:JSON.parse(Cookies.get('riverName'))
      name:Cookies.get('riverName')
    },
    
  }
  
  const mutations = {
    saveRiver: (state, data) => {
      state.riverInfo = data
      Cookies.set('riverId', data.id)
      Cookies.set('riverName', data.name)
    },
  }
  
  const actions = {
    changeRiver({ commit }, data) {
      commit('saveRiver', data)
    },
  }
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  