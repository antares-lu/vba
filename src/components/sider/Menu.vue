<template>
  <i-menu class="sider-menu" accordion active-name="dashboard">
    <template v-for="menu in menuList">
      <i-tooltip :key="menu.name" :content="menu.text" placement="right" :disabled="!fold">
        <i-menu-item :name="menu.name" class="sider-menu-item">
            <i-icon :type="menu.icon" />
          <span class="text">{{ menu.text }}</span>
        </i-menu-item>
      </i-tooltip>
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

  &-item {
    width: 100%;
    height: 48px !important;
    transition: all .2s ease-in-out;

    > i {
      margin-right: 12px;
      vertical-align: middle;
      font-size: 18px;
      color: @font-hover-color;
      transition: font-size .2s ease-in-out;
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
</style>
