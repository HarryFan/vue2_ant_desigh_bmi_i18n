<template>
  <div id="app">
    <div style="display: flex; justify-content: flex-end; padding: 16px;">
      <a-dropdown>
        <a class="ant-dropdown-link" href="#">
          <a-icon type="global" style="margin-right: 8px" /> {{ $t('language') }}
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay" @click="changeLanguage">
          <a-menu-item key="zh-TW">繁體中文</a-menu-item>
          <a-menu-item key="zh-CN">简体中文</a-menu-item>
          <a-menu-item key="en">English</a-menu-item>
          <a-menu-item key="ko">한국어</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <bmi-calculator />
  </div>
</template>

<script>
  import BmiCalculator from './components/BmiCalculator.vue';

  export default {
    name: 'App',
    components: {
      BmiCalculator,
    },
    methods: {
      changeLanguage(event) {
        this.$i18n.locale = event.key;
      },
    },
  };
</script>