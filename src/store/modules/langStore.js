const langStore = {
  namespaced: true,

  state: {
    language: 'zh',
  },

  getters: {
    // 获取当前语言
    language({ language }) {
      return language;
    },
  },

  mutations: {
    // 设置语言
    setLanguage(state, { language }) {
      state.language = language;
    },
  },

  actions: {
    invokeSetLanguage({ commit }, payload) {
      commit('setLanguage', payload);
    },
  },
};

export default langStore;
