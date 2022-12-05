<template>
  <div id="app">
    <HeaderPage />
    <MainPage />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '@/assets/scss/_reset.scss';
</style>
