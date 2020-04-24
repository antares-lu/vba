<template>
  <i-layout id="backoffice-layout">
    <!-- 侧栏 -->
    <i-sider
      id="sider"
      :class="fold ? 'foled' : ''" :width="236" :value="fold" collapsible hide-trigger>
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
      <!-- 头部 -->
      <i-header>
        <c-head />
      </i-header>
      <!-- 内容区域 -->
      <i-content>
        <router-view></router-view>
      </i-content>
    </i-layout>
  </i-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SiderMenu from '../components/sider/Menu.vue';
import CHead from '../components/head/Index.vue';

export default {
  name: 'BackOffice',
  components: {
    SiderMenu,
    CHead,
  },
  data() {
    return {
      psInstance: null,
    };
  },
  computed: {
    ...mapGetters({
      fold: 'siderStore/fold',
    }),
  },
  methods: {
    ...mapActions({
      setSiderFoldState: 'siderStore/invokeSetFoldState',
    }),
    test() {
      this.setSiderFoldState({ fold: !this.fold });
    },
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
    padding: 0 8px;
    line-height: normal;
    box-shadow: 0 2px 6px 0 rgba(190, 204, 216, .4);
  }

  /deep/ .ivu-layout-content {
    padding: 16px;
  }

  /deep/ .ivu-layout-sider {
    background-color: @font-hover-color;
    background-color: transparent;
    color: #fff;

    .ivu-menu-vertical:after {
      width: 0;
    }

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
          transition: all .2s ease-in-out;
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

  /**
   * 侧栏折叠时样式
  */
  > #sider.foled {
    /deep/ .ivu-layout-sider-children {
      #logo {
        >img {
          height: 60%;
        }

        > h1 {
          display: none;
        }
      }

      .sider-menu {
        &-item {
          > .text {
            width: 0;
            font-size: 0;
          }
        }

        &-sub {
          /deep/ .ivu-menu-submenu-title {
            > .text {
              width: 0;
              font-size: 0;
            }

            > .ivu-icon:last-of-type {
              display: none;
            }
          }

          /deep/ .ivu-menu {
            display: none;
          }
        }
      }
    }
  }
}
</style>
