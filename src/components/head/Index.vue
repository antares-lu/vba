<template>
  <header id="head">
    <div class="head-left">
      <fold-btn />
    </div>
    <div class="head-right">
      <language />
      <user-info />
    </div>
  </header>
</template>

<script>
import FoldBtn from './FoldBtn.vue';
import Language from './Language.vue';
import UserInfo from './UserInfo.vue';

export default {
  name: 'Head',
  components: {
    FoldBtn,
    Language,
    UserInfo,
  },
};
</script>

<style lang="less" scoped>
#head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  > .head-right {
    display: flex;
    justify-content: flex-start;
    padding-right: 12px;
  }
}
</style>
