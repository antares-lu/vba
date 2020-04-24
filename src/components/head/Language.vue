<template>
  <div class="language">
    <i-dropdown trigger="click">
      <p>
        <a href="javascript:void(0)">中文</a>
        <img src="../../assets/svg/switch.svg" />
      </p>
      <i-dropdown-menu slot="list">
        <i-dropdown-item selected>中文</i-dropdown-item>
        <i-dropdown-item>English</i-dropdown-item>
      </i-dropdown-menu>
    </i-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
};
</script>

<style lang="less" scoped>
.language {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 12px;

  p {
    cursor: pointer;

    > img {
      margin-left: 6px;
      height: 15px;
    }
  }
}
</style>
