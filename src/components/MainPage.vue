<template>
  <div>
    <section class="section1 d-flex justify-content-center align-items-center container p-0
    py-5 mx-auto">
      <MainSectionOne />
      <MainSectionOne />
      <MainSectionOne />
    </section>
    <section class="section2 d-flex justify-content-center align-items-center container p-0
    mx-auto">
    <MainSectionTwo />
    </section>
    <section class="section3 d-flex justify-content-center align-items-center container p-0
    mx-auto">
      <MainSectionThree />
    </section>
  </div>
</template>

<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';
import MainSectionThree from './MainSectionThree.vue';

export default {
  name: 'MainPage',
  components: {
    MainSectionOne,
    MainSectionTwo,
    MainSectionThree,
  },
};
</script>

<style lang="scss" scoped>
.section1{
  margin: 5rem;
}
</style>
