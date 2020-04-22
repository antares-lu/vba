<template>
  <div id="login-form">
    <h2 class="title">welcome to {{ $t('global.projectName') }}</h2>
    <div class="form-container">
      <div class="form-control">
        <input
          ref="username"
          type="text"
          id="username" v-model="username" readonly @focus.once="handleAutoComplete">
        <label for="username" :class="username ? 'end' : ''">用户名</label>
        <p class="tip">😮 输入不能为空哦</p>
      </div>
      <div class="form-control">
        <input type="password" id="password" v-model="password" @focus.once="handleAutoComplete">
        <label for="password" :class="password ? 'end' : ''">密码</label>
        <p class="tip">😮 输入不能为空哦</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    /**
     * 防止谷歌浏览器自动填充表单，产生意外样式
     */
    handleAutoComplete() {
      this.$refs.username.removeAttribute('readonly');
    },
  },
};
</script>

<style lang="less" scoped>
#login-form {
  width: 100%;
  height: 100%;
  padding: 0 32px;

  > .title {
    margin-bottom: 26px;
    padding: 12px 0;
    font-weight: lighter;
    font-size: 32px;
    color: @font-primary-color;
  }

  > .form-container {
    width: 100%;
    height: calc(100% - 60px);

    > .form-control {
      position: relative;
      width: 100%;
      margin-bottom: 22px;
      padding-bottom: 16px;
      color: @font-primary-color;

      &:last-of-type {
        margin-bottom: 0;
      }

      > input {
        width: 100%;
        padding: 12px;
        border: 1.18px solid #ddd;
        border-radius: 2px;
        font-size: 12px;

        &:focus {
          border: 1.18px solid @font-hover-color;
        }

        &:focus~label {
          font-size: 10px;
          color: #fff;
          padding: 3px 8px;
          border-radius: 2px;
          background-color: @font-hover-color;
          top: 0;
          left: 18px;
          transform: translateY(-50%);
        }
      }

      > label {
        position: absolute;
        top: 12px;
        left: 12px;
        font-size: 12px;
        transition: all .3s;

        &.end {
          font-size: 10px;
          color: #fff;
          padding: 3px 8px;
          border-radius: 2px;
          background-color: @font-hover-color;
          top: 0;
          left: 18px;
          transform: translateY(-50%);
        }
      }

      > .tip {
        position: absolute;
        right: 0;
        padding-top: 3px;
        font-size: 10px;
        color: @font-primary-color;
      }
    }
  }
}
</style>
