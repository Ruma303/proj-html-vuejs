<template>
  <div>
    <section class="section1 d-flex justify-content-center align-items-center container p-0
    py-5 mx-auto">
      <MainSectionOne />
      <MainSectionOne />
      <MainSectionOne />
    </section>
    <section class="section2 d-flex justify-content-center align-items-center container p-0 py-5
    mx-auto">
    <MainSectionTwo />
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';

export default {
  name: 'MainPage',
  components: {
    MainSectionOne,
    MainSectionTwo,
  },
};
</script>

<style lang="scss" scoped>
.section1{
  margin: 5rem;
}
</style>
