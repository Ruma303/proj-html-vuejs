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
    <section class="section3 d-flex justify-content-center align-items-center container-fluid p-0
    mx-auto my-5">
      <MainSectionThree />
    </section>
    <section class="section4 d-flex justify-content-center align-items-center container-fluid p-0
    mx-auto my-5">
      <MainSectionFour />
    </section>
    <section class="section5 d-flex justify-content-center align-items-center container-fluid p-0
    mx-auto my-5">
      <MainSectionFive />
    </section>
    <section class="section6 d-flex justify-content-center align-items-center container-fluid p-0
    mx-auto my-5">
      <MainSectionSix />
    </section>
  </div>
</template>

<script>
import MainSectionOne from './MainSectionOne.vue';
import MainSectionTwo from './MainSectionTwo.vue';
import MainSectionThree from './MainSectionThree.vue';
import MainSectionFour from './MainSectionFour.vue';
import MainSectionFive from './MainSectionFive.vue';
import MainSectionSix from './MainSectionSix.vue';

export default {
  name: 'MainPage',
  components: {
    MainSectionOne,
    MainSectionTwo,
    MainSectionThree,
    MainSectionFour,
    MainSectionFive,
    MainSectionSix,
  },
};
</script>

<style lang="scss" scoped>
.section1{
  margin: 5rem;
}
</style>
