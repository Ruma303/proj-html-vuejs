<template>
  <div class="sec4-container container-fluid d-flex flex-column justify-content-center
  align-items-center">
    <h1 id="title">Our Testimonials</h1>
    <p class="text-secondary">If you are planning on developing a product landing app or website,
      take a loog at this beautiful-crafted
    </p>
    <CarouselSlide
    :arrData="arrData"
    />

    <div class="dots d-flex gap-2 mt-2">
      <font-awesome-icon icon="fa-solid fa-circle" class="single-dot"
      @click="Left()"/>
      <font-awesome-icon icon="fa-solid fa-circle" class="single-dot"
      @click="Right()"/>
    </div>
  </div>
</template>

<script>
import CarouselSlide from './CarouselSlide.vue';

export default {
  name: 'MainSectionFour',
  components: {
    CarouselSlide,
  },
  data() {
    return {
      arrData: [
        {
          src: '25',
          name: 'Pacciani Pietro',
          profession: 'Amico di merende',
          quote: 'Se ni’ mondo esistesse un po’ di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello.',
        },
        {
          src: '26',
          name: 'Julia Aann',
          profession: 'COO Softbox',
          quote: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.',
        },
        {
          src: '27',
          name: 'Mac Znder',
          profession: 'Manager Softbox',
          quote: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sec4-container {
  background-image: url('../img/15.png');
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 30rem;
}
#title {
  font-weight: 400;
  font-size: 2rem;
}
.cards-container {
  padding: 1rem;
  background-color: rgb(240, 240, 240);
  box-shadow: 5px 5px 5rem rgb(240, 240, 240);
  margin-top: 5rem;
}
</style>
