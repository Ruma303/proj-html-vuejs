<template>
  <div class="container-fluid section3 d-flex flex-column
  justify-content-center align-items-center">
    <div class="top-row row d-flex justify-content-center align-items-center">
      <div class="top-left d-flex flex-column col-8">
        <h1>Popular features that your business needs</h1>
        <p class="text-secondary justify-content-center align-items-center">
        Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser
        cras nice one boot fanny!</p>
      </div>
      <div class="top-right d-flex justify-content-center align-items-center offset-1 col-3">
        <button class="btn btn-primary" id="more-button">Explore More Features</button>
      </div>
    </div>
    <div class="cards-container row row-cols-4 d-flex justify-content-center
    align-items-center p-2 m-0 gap-3">
      <FeatureCard
      v-for="item in arrData"
        :key="item.cardTitle"
        :cardTitle="item.cardTitle"
        :icon="item.icon"
        :color="item.color"
        class="single-card"
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
          icon: 'fa-chart-bar',
          color: 'blue',
        },
        {
          cardTitle: 'Stock Management',
          icon: 'fa-paper-plane',
          color: 'salmon',
        },
        {
          cardTitle: 'Receivable & Payables',
          icon: 'fa-user',
          color: 'green',
        },
        {
          cardTitle: 'Manage Buying',
          icon: 'fa-chart-bar',
          color: 'blue',
        },
        {
          cardTitle: 'Powerful & Secure',
          icon: 'fa-paper-plane',
          color: 'salmon',
        },
        {
          cardTitle: 'Fastest Return Filing',
          icon: 'fa-user',
          color: 'green',
        },
        {
          cardTitle: 'Monthly Detailed',
          icon: 'fa-paper-plane',
          color: 'salmon',
        },
        {
          cardTitle: 'Product Management',
          icon: 'fa-chart-bar',
          color: 'blue',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section3 {
  background-image: url('../img/14.png');
  background-repeat: no-repeat;
  background-position-x: -10%;
  background-size: 30rem;
  height: 30rem;
  margin: 8rem 0;
}
h1 {
  font-weight: 400;
  font-size: 2rem;
}
.cards-container {
  max-width: 64rem;
  height: 18rem;
  background-color: rgb(240, 240, 240);
  box-shadow: 0 0 5rem rgb(240, 240, 240);
 .single-card:hover {
  background-color: #6cdac1;
  color: white;
  }
}
#more-button:hover {
  color: white;
  background-color: black;
}
</style>
