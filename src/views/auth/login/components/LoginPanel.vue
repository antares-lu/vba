<template>
  <div id="login-panel">
    <div class="logo">
      <img src="../../../../assets/svg/vuejs.svg" alt="vba">
    </div>
    <div class="login-form-wrap">
      <login-form />
    </div>
    <div class="login-btn" @click="submitLogin">
      <arrow-right-lottie />
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue';
import ArrowRightLottie from './ArrowRightLottie.vue';

export default {
  name: 'LoginPanel',
  components: {
    LoginForm,
    ArrowRightLottie,
  },
  methods: {
    submitLogin() {
    },
  },
};
</script>

<style lang="less" scoped>
#login-panel {
  position: relative;
  width: 86%;
  height: 60%;
  background-color: #fff;
  border-radius: 6px;

  > .logo {
    position: absolute;
    transform: translateX(-14%) translateY(-14%);
    width: 240px;
    height: 240px;
    border-radius: 6px;
    background-color: #4a63fe;
    box-shadow: 0 1px 40px -12px rgba(0, 0, 0, .8);

    > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 160px;
      opacity: .86;
    }
  }

  > .login-form-wrap {
    position: absolute;
    right: 40px;
    top: 40px;
    width: calc(100% - (240px + (240px * .14)));
    height: 60%;
  }

  > .login-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateX(30%) translateY(-80%);
    width: 160px;
    height: 60px;
    border-radius: 6px;
    background-color: #4a63fe;
    cursor: pointer;
  }
}
</style>
