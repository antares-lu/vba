<template>
  <div id="dashboard-page" class="content-page" v-scrollbar>
    <h2>Dashboard Page</h2>
    <i-dropdown placement="right">
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <i-dropdown-menu slot="list">
            <i-dropdown-item>驴打滚</i-dropdown-item>
            <i-dropdown-item>炸酱面</i-dropdown-item>
            <i-dropdown-item>豆汁儿</i-dropdown-item>
            <i-dropdown-item>冰糖葫芦</i-dropdown-item>
            <i-dropdown-item>北京烤鸭</i-dropdown-item>
        </i-dropdown-menu>
    </i-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style lang="less" scoped>
#dashboard-page {
  position: relative;
  background-color: #fff;
  border-radius: 4px;
}
</style>
