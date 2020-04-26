<template>
  <div id="dashboard-page" class="content-page" v-scrollbar>
    <h2>Welcome To Vba</h2>
    <p>{{ $t('test') }}</p>
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
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-weight: lighter;
    font-size: 46px;
    color: @font-hover-color;
  }
}
</style>
