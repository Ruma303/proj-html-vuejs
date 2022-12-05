<template>
  <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
    <!-- <img src="../img/14.png" alt="" class="bg_img"> -->
    <div class="top-row row d-flex justify-content-center align-items-center">
      <div class="top-left d-flex flex-column col-8">
        <h1>Popular features that your business needs</h1>
        <p class="text-secondary justify-content-center align-items-center">
        Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser
        cras nice one boot fanny!</p>
      </div>
      <div class="top-right d-flex justify-content-center align-items-center offset-1 col-3">
        <button class="btn btn-primary">Explore Mofre Features</button>
      </div>
    </div>
    <div class="row row-cols-4 d-flex justify-content-center
    align-items-center p-2 m-0 gap-4">
      <FeatureCard
      v-for="item in arrData"
        :key="item.cardTitle"
        :cardTitle="item.cardTitle"
        :src="item.src"
        />
    </div>
  </div>
</template>

<script>
import FeatureCard from './FeatureCard.vue';

export default {
  name: 'MainSectionThree',
  components: {
    FeatureCard,
  },
  data() {
    return {
      arrData: [
        {
          cardTitle: 'Customized invoices',
          src: '',
        },
        {
          cardTitle: 'Stock Management',
          src: '',
        },
        {
          cardTitle: 'Receivable & Payables',
          src: '',
        },
        {
          cardTitle: 'Manage Buying',
          src: '',
        },
        {
          cardTitle: 'Powerful & Secure',
          src: '',
        },
        {
          cardTitle: 'Fastest Return Filing',
          src: '',
        },
        {
          cardTitle: 'Monthly Detailed',
          src: '',
        },
        {
          cardTitle: 'Product Management',
          src: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg_img {
  position: relative;
  top:0;
  left: -50%;
}
h1 {
  font-weight: 400;
  font-size: 2rem;
}
</style>
