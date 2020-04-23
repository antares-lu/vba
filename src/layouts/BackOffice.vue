<template>
  <i-layout id="backoffice-layout">
    <i-sider id="sider" :width="236" collapsible hide-trigger>
      <!-- 如果拆分成组件引入会有问题 -->
      <div id="logo">
        <img src="../assets/svg/vuejs.svg" alt="vba">
        <h1>vba</h1>
      </div>
      <div ref="sider-content" class="sider-content">
        <sider-menu />
      </div>
    </i-sider>
    <i-layout>
      <i-header></i-header>
      <i-content>
        <router-view></router-view>
      </i-content>
      <i-footer></i-footer>
    </i-layout>
  </i-layout>
</template>

<script>
import SiderMenu from '../components/sider/Menu.vue';

export default {
  name: 'BackOffice',
  components: {
    SiderMenu,
  },
  data() {
    return {
      psInstance: null,
    };
  },
};
</script>

<style lang="less" scoped>
#backoffice-layout {
  width: 100%;
  height: 100%;

  /deep/ .ivu-layout-header {
    height: 56px;
    background-color: #fff;
    padding: 0 20px;
    line-height: normal;
    box-shadow: 0 2px 6px 0 rgba(190, 204, 216, .4);
  }

  /deep/ .ivu-layout-sider{
    background-color: @font-hover-color;
    background-color: transparent;
    color: #fff;

    /deep/ #sider {
      width: 100%;
      height: 100%;
    }
  }

  > #sider {
    /deep/ .ivu-layout-sider-children {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      > #logo {
        flex: 0 0 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 56px;
        background-color: @font-hover-color;

        > img {
          height: 80%;
          opacity: .86;
        }

        > h1 {
          padding-left: 12px;
          font-weight: 200;
          font-size: 32px;
        }
      }

      > .sider-content {
        flex: 1;
        position: relative;
        background-color: #fff;
        // overflow-x: hidden;
        // overflow-y: auto;
      }
    }
  }
}
</style>
