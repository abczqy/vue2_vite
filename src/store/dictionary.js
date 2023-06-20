
const state = {
  rivers: [],
  types: [],
  // code: [
  //   {
  //     text: "一级预警相应",
  //     value: 1,
  //     id: 1,
  //   },
  //   {
  //     text: "二级预警相应",
  //     value: 2,
  //     id: 2,
  //   },
  //   {
  //     text: "三级预警相应",
  //     value: 3,
  //     id: 3,
  //   },
  // ],
  // user: [
  //   { userName: '易磊', userId: '1' },
  //   { userName: '傅刚', userId: '2' },
  //   { userName: '乔芳', userId: '3' },
  //   { userName: '石杰', userId: '4' },
  //   { userName: '陈霞', userId: '5' },
  //   { userName: '林静', userId: '6' },
  //   { userName: '贾敏', userId: '7' },
  //   { userName: '叶明', userId: '8' },
  //   { userName: '梁秀兰', userId: '9' },
  //   { userName: '高杰', userId: '10' },
  //   { userName: '廖敏', userId: '11' },
  //   { userName: '毛刚', userId: '12' },
  //   { userName: '孟娟', userId: '13' },
  //   { userName: '唐芳', userId: '14' },
  //   { userName: '史刚', userId: '15' },
  //   { userName: '孙超', userId: '16' },
  //   { userName: '于平', userId: '17' },
  //   { userName: '乔刚', userId: '18' },
  //   { userName: '董强', userId: '19' },
  //   { userName: '万杰', userId: '20' },
  //   { userName: '彭超', userId: '21' },
  //   { userName: '姜艳', userId: '22' },
  //   { userName: '崔磊', userId: '23' },
  //   { userName: '武伟', userId: '24' },
  //   { userName: '罗芳', userId: '25' },
  //   { userName: '程杰', userId: '26' },
  //   { userName: '史强', userId: '27' },
  //   { userName: '何桂英', userId: '28' },
  //   { userName: '张霞', userId: '29' },
  //   { userName: '徐涛', userId: '30' },
  //   { userName: '叶秀英', userId: '31' },
  //   { userName: '潘静', userId: '32' },
  //   { userName: '熊娜', userId: '33' },
  //   { userName: '冯洋', userId: '34' },
  //   { userName: '黄秀英', userId: '35' },
  //   { userName: '金强', userId: '36' },
  //   { userName: '杜平', userId: '37' },
  //   { userName: '林芳', userId: '38' },
  //   { userName: '杜洋', userId: '39' },
  //   { userName: '顾超', userId: '40' }
  // ],
  // test: '1',
  // // 创建人id 操作人id 发布者id应该是登录后同一显示
  
}

const mutations = {
  addRiver: (state, data) => {
    state.rivers = data
  },
  addType: (state, data) => {
    state.types = data
  }
}

const actions = {
  changeRiverArr({ commit }, data) {
    commit('addRiver', data)
  },
  changeTypeArr({ commit }, data) {
    commit('addType', data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
