const siderStore = {
  namespaced: true,

  state: {
    // 侧栏是否折叠
    fold: true,
  },

  getters: {
    fold({ fold }) {
      return fold;
    },
  },

  mutations: {
    // 设置折叠状态
    setFoldState(state, { fold }) {
      state.fold = fold;
    },
  },

  actions: {
    invokeSetFoldState({ commit }, payload) {
      commit('setFoldState', payload);
    },
  },
};

export default siderStore;
