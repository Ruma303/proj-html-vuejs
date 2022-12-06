<template>
<div class="cards-container d-flex gap-3">
    <TestimonialCard
    v-show="( i === activeindex|| i === activeindex+1)"
    v-for="(tizio, i) in arrData"
    :key="tizio.src"
    :name="tizio.name"
    :profession="tizio.profession"
    :quote="tizio.quote"
    :src="`../img/${tizio.src}.jpeg`"
    class="testimonial-card"
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
import TestimonialCard from './TestimonialCard.vue';

export default {
  name: 'CarouselSlide',
  components: {
    TestimonialCard,
  },
  props: {
    src: String,
    name: String,
    profession: String,
    quote: String,
    arrData: Array,
  },
  data() {
    return {
      activeindex: 0,
    };
  },
  methods: {
    Right() {
      this.activeindex += 1;
    },
    Left() {
      this.activeindex -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
