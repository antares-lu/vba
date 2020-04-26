<template>
  <div class="language">
    <i-dropdown trigger="click" @on-click="changeLanguage">
      <p>
        <a href="javascript:void(0)">{{ $t('app.language') }}</a>
        <img src="../../assets/svg/switch.svg" />
      </p>
      <i-dropdown-menu slot="list">
        <i-dropdown-item
          v-for="lang in languageList"
          :key="lang"
          :name="lang"
          :selected="lang === currentLang">{{ $t(`language.${lang}`) }}</i-dropdown-item>
      </i-dropdown-menu>
    </i-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data() {
    return {
      languageList: ['zh', 'en'],
    };
  },
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeLanguage(name) {
      localStorage.setItem('language', name);
      this.$i18n.locale = name;
    },
  },
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
