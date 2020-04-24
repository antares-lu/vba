<template>
  <div class="user-info">
    <i-dropdown placement="bottom-end">
      <p>
        <span class="name">哭着敲代码</span>
        <i-avatar src="https://sonyactivity.oss-cn-zhangjiakou.aliyuncs.com/9ec5948c-5049-4ced-9272-665e837f6fc8.jpeg" />
      </p>
      <i-dropdown-menu slot="list">
        <div class="user-info-panel">
          <img src="../../assets/images/user-info-panel.jpg">
        </div>
      </i-dropdown-menu>
    </i-dropdown>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
};
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 12px;

  p {
    cursor: pointer;

    > .name {
      display: inline-block;
      margin-right: 12px;
      vertical-align: middle;
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: color .2s ease-in-out;

      &:hover {
        color: @font-hover-color;
      }
    }
  }

  /deep/ .ivu-select-dropdown {
    overflow: hidden;
    padding-top: 0;
  }

  &-panel {
    width: 280px;
    height: 260px;
    background-color: #fff;
    border-radius: 4px;

    > img {
      width: 100%;
      height: 140px;
    }
  }
}
</style>
