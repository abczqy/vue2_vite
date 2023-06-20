
const state = {
  metaInfo: {
    	title: '',
    	keywords: '',
    	description: ''
  }
}

const mutations = {
  CHANGE_META_INFO(state, metaInfo) {
    state.metaInfo = metaInfo
  }
}

const actions = {
  changeMetaInfo({ commit }, view) {
    commit('CHANGE_META_INFO', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
