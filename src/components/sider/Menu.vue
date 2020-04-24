<template>
  <i-menu class="sider-menu" accordion active-name="dashboard">
    <template v-for="menu in menuList">
      <template v-if="!menu.chirden">
        <i-tooltip :key="menu.name" :content="menu.text" placement="right" :disabled="!fold">
          <i-menu-item :name="menu.name" class="sider-menu-item">
            <i-icon :type="menu.icon" />
            <span class="text">{{ menu.text }}</span>
          </i-menu-item>
        </i-tooltip>
      </template>
      <template v-else>
        <i-submenu :key="menu.name" :name="menu.name" class="sider-menu-sub">
          <template slot="title">
            <i-icon :type="menu.icon" />
            <span class="text">{{ menu.text }}</span>
          </template>
          <i-menu-item
            v-for="subMenu in menu.chirden"
            :key="subMenu.name"
            :name="subMenu.name">{{ subMenu.text }}</i-menu-item>
        </i-submenu>
      </template>
    </template>
  </i-menu>
</template>

<script>
import { mapGetters } from 'vuex';

const BASE_PATH = '/backoffice';

export default {
  name: 'SiderMenu',
  data() {
    return {
      menuList: [
        {
          name: 'dashboard',
          text: '哭着敲代码',
          icon: 'ios-information-circle-outline',
          to: `${BASE_PATH}/dashboard`,
        },
        {
          name: 'logManage',
          text: '日志管理',
          icon: 'md-clipboard',
          to: `${BASE_PATH}/log`,
        },
        {
          name: 'formPage',
          text: '表单页',
          icon: 'ios-apps',
          to: `${BASE_PATH}/log`,
          chirden: [
            {
              name: 'baseForm',
              text: '基础表单',
              to: `${BASE_PATH}/log`,
            },
            {
              name: 'stepForm',
              text: '分步表单',
              to: `${BASE_PATH}/log`,
            },
            {
              name: 'seniorForm',
              text: '高级表单',
              to: `${BASE_PATH}/log`,
            },
          ],
        },
        {
          name: 'personalpAGE',
          text: '个人页',
          icon: 'ios-person',
          to: `${BASE_PATH}/log`,
          chirden: [
            {
              name: 'personalCenter',
              text: '个人中心',
              to: `${BASE_PATH}/log`,
            },
            {
              name: 'personalSetting',
              text: '个人设置',
              to: `${BASE_PATH}/log`,
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      fold: 'siderStore/fold',
    }),
  },
};
</script>

<style lang="less" scoped>
.sider-menu {
  width: 100% !important;
  user-select: none;

  /deep/ .ivu-tooltip {
    height: 48px !important;

    .ivu-tooltip-rel {
      height: 100%;

      .sider-menu-item {
        width: 100%;
        height: 100%;
        transition: all .2s ease-in-out;

        &:hover {
          background-color: rgba(0, 0, 0, .04);
        }

        > i {
          margin-right: 12px;
          vertical-align: middle;
          font-size: 18px;
          color: @font-hover-color;
        }

        > .text {
          display: inline-block;
          width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: bottom;
          font-size: 13px;
          color: @font-primary-color;
          transition: width .2s ease-in-out .12s;
          opacity: 1;
        }
      }
    }
  }

  &-sub {
    /deep/ .ivu-menu-submenu-title {
      width: 100%;
      height: 48.8px !important;
      transition: all .2s ease-in-out;

      &:hover {
        background-color: rgba(0, 0, 0, .04);
      }

      > i {
        margin-right: 12px;
        vertical-align: middle;
        font-size: 18px;
        color: @font-hover-color;
      }

      > .text {
        display: inline-block;
        width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        font-size: 13px;
        color: @font-primary-color;
        transition: width .2s ease-in-out .12s;
        opacity: 1;
      }
    }

    /deep/ .ivu-menu {
      > li {
        height: 48px !important;
        font-size: 13px;
        color: @font-primary-color;

        &:hover {
          background-color: rgba(0, 0, 0, .04);
        }
      }
    }
  }
}
</style>
