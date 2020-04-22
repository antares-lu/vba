<template>
  <footer id="foot">
    <p>Copyright © 2020 @cryi</p>
  </footer>
</template>

<script>
export default {
  name: 'Foot',
};
</script>

<style lang="less" scoped>
#foot {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  > p {
    text-align: center;
    padding: 12px 0;
    font-size: 13px;
  }
}
</style>
