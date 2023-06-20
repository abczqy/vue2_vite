const state = {
    isOnControl: false
}

const mutations = {
    setControl(state, date) {
        state.isOnControl = date
    }
}


export default {
    namespaced: true,
    state,
    mutations
}