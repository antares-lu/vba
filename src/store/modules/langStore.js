const langStore = {
  namespaced: true,

  state: {
    local: 'zh',
  },

  getters: {
    // 获取当前语言
    local({ local }) {
      return local;
    },
  },

  mutations: {
    // 设置语言
    setLocal(state, { local }) {
      state.local = local;
    },
  },

  actions: {
    invokeSetLocal({ commit }, payload) {
      commit('setLocal', payload);
    },
  },
};

export default langStore;
