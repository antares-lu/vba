<template>
  <i-menu class="sider-menu" width="236" accordion>
    <i-menu-item name="3-1">
      <i-icon type="ios-information-circle-outline" />
      <span>哭着敲代码</span>
    </i-menu-item>
    <i-submenu name="2">
      <template slot="title">
        <i-icon type="ios-people" />
        用户管理
      </template>
      <i-menu-item name="2-1">新增用户</i-menu-item>
      <i-menu-item name="2-2">活跃用户</i-menu-item>
    </i-submenu>
    <i-submenu name="3">
      <template slot="title">
          <i-icon type="ios-stats" />
          统计分析
      </template>
      <i-menu-group title="使用">
        <i-menu-item name="3-1">新增和启动</i-menu-item>
        <i-menu-item name="3-2">活跃分析</i-menu-item>
        <i-menu-item name="3-3">时段分析</i-menu-item>
      </i-menu-group>
      <i-menu-group title="留存">
        <i-menu-item name="3-4">用户留存</i-menu-item>
        <i-menu-item name="3-5">流失用户</i-menu-item>
      </i-menu-group>
    </i-submenu>
  </i-menu>
</template>

<script>
export default {
  name: 'SiderMenu',
};
</script>

<style lang="less" scoped>
.ivu-menu-vertical:after {
  width: 0;
}

.sider-menu {
  i {
    color: @font-hover-color;
  }
}
</style>
