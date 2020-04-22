const authStore = {
  namespaced: true,

  state: {
    // 登录表单数据
    loginForm: {
      username: '',
      password: '',
    },
  },

  getters: {
    // 返回 loginForm 数据
    loginFormData({ loginForm }) {
      return loginForm;
    },
  },

  mutations: {
    // 设置登录表单用户名
    setUsernameAsLoginForm(state, { username }) {
      state.loginForm.username = username;
    },
    // 设置登录表单登录密码
    setPasswordAsLoginForm(state, { password }) {
      state.loginForm.password = password;
    },
  },

  actions: {
    invokeSetUsernameAsLoginForm({ commit }, payload) {
      commit('setUsernameAsLoginForm', payload);
    },
    invokeSetPasswordAsLoginForm({ commit }, payload) {
      commit('setPasswordAsLoginForm', payload);
    },
  },
};

export default authStore;
