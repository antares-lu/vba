<template>
  <header id="head">
    <fold-btn />
  </header>
</template>

<script>
import FoldBtn from './FoldBtn.vue';

export default {
  name: 'Head',
  components: {
    FoldBtn,
  },
};
</script>

<style lang="less" scoped>
#head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>
