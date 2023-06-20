/*
 * @Author: L
 * @Date: 2022-03-17 13:40:15
 * @LastEditTime: 2022-07-06 18:50:05
 * @LastEditors: Do not edit
 * @Description: 存储水库信息
 */
import Cookies from 'js-cookie'

const state = {
    reservoirInfo: {
      id:Cookies.get('reservoirId'),
      // name:JSON.parse(Cookies.get('riverName'))
      name:Cookies.get('reservoirName')
    },
    
  }
  
  const mutations = {
    saveReservoir: (state, data) => {
      state.reservoirInfo = data
      Cookies.set('reservoirId', data.id)
      Cookies.set('reservoirName', data.name)
    },
  }
  
  const actions = {
    changeReservoir({ commit }, data) {
      commit('saveReservoir', data)
    },
  }
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  