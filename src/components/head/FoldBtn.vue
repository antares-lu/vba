<template>
  <div class="fold-btn">
    <img
      src="../../assets/svg/push.svg"
      :class="fold ? 'foled' : ''" @click="setFoldState({ fold: !fold })">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  nameL: 'FoldBtn',
  computed: {
    ...mapGetters({
      fold: 'siderStore/fold',
    }),
  },
  methods: {
    ...mapActions({
      setFoldState: 'siderStore/invokeSetFoldState',
    }),
  },
};
</script>

<style lang="less" scoped>
.fold-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 100%;

  > img {
    height: 40%;
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &.foled {
      transform: rotateZ(180deg);
    }
  }
}
</style>
