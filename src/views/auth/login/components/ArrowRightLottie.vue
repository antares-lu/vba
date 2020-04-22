<template>
  <div ref="lottie" class="lottie arrow-right-lottie"></div>
</template>

<script>
import arrowRightLottie from '../../../../assets/lottie/arrow-right.json';

export default {
  name: 'ArrowRightLottie',
  mounted() {
    this.$lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: arrowRightLottie,
    });
  },
};
</script>

<style lang="less" scoped>
.arrow-right-lottie {
  width: 100%;
  height: 100%;
}
</style>
