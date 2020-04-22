<template>
  <div ref="lottie" class="lottie dashboard-lottie"></div>
</template>

<script>
import dashboardLottie from '../../../../assets/lottie/dashboard.json';

export default {
  name: 'DashboardLottie',
  mounted() {
    this.$lottie.loadAnimation({
      container: this.$refs.lottie, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: dashboardLottie,
    });
  },
};
</script>

<style lang="less" scoped>
.dashboard-lottie {
  width: 100%;
  transform: translateY(10px);
}
</style>
