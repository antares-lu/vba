<template>
  <div id="login-page">
    <div class="login-page-left">
      <login-panel />
    </div>
    <div class="login-page-right">
      <dashboard-lottie />
    </div>
    <foot />
  </div>
</template>

<script>
import DashboardLottie from './components/DashboardLottie.vue';
import LoginPanel from './components/LoginPanel.vue';
import Foot from '../../../components/common/Foot.vue';

export default {
  name: 'Login',
  components: {
    DashboardLottie,
    LoginPanel,
    Foot,
  },
};
</script>

<style lang="less" scoped>
#login-page {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  > div {
    flex: 0 0 50%;
    height: 100%;

    &.login-page-left {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &.login-page-right {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
