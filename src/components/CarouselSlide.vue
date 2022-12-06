<template>
<div class="cards-container d-flex gap-3">
      <TestimonialCard
      v-for="tizio in arrData"
      :key="tizio.src"
      :name="tizio.name"
      :profession="tizio.profession"
      :quote="tizio.quote"
      :src="`../img/${tizio.src}.jpeg`"
      class="testimonial-card"
      />
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
};
</script>

<style lang="scss" scoped>

</style>
