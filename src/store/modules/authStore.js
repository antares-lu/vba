const authStore = {
  namespaced: true,

  state: {
    // 登录表单数据
    loginForm: {
      username: '',
      password: '',
    },
    // 登录表单选项是否被聚焦过
    loginFormInputFocused: {
      username: false,
      password: false,
    },
  },

  getters: {
    // 返回 loginForm 数据
    loginFormData({ loginForm }) {
      return loginForm;
    },
    // 返回 loginForm 选项是否聚焦过
    loginFormInputFocusedFlag({ loginFormInputFocused }) {
      return loginFormInputFocused;
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
    // 设置用户名 input 框聚焦过
    setUsernameInputFocusedAsLoginForm(state, { username }) {
      state.loginFormInputFocused.username = username;
    },
    // 设置密码 input 框聚焦过
    setPasswordInputFocusedAsLoginForm(state, { password }) {
      state.loginFormInputFocused.password = password;
    },
  },

  actions: {
    invokeSetUsernameAsLoginForm({ commit }, payload) {
      commit('setUsernameAsLoginForm', payload);
    },
    invokeSetPasswordAsLoginForm({ commit }, payload) {
      commit('setPasswordAsLoginForm', payload);
    },
    invokeSetUsernameInputFocusedAsLoginForm({ commit }, payload) {
      commit('setUsernameInputFocusedAsLoginForm', payload);
    },
    invokeSetPasswordInputFocusedAsLoginForm({ commit }, payload) {
      commit('setPasswordInputFocusedAsLoginForm', payload);
    },
  },
};

export default authStore;
