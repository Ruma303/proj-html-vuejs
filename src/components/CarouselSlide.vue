<template>
  <div class="cards-container d-flex flex-column gap-3 justify-content-center
  align-items-center">
    <div class="cards d-flex gap-5">
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
    </div>
    <div class="dots d-flex gap-2 mt-2">
      <font-awesome-icon icon="fa-solid fa-circle" class="single-dot"
      @click="Left()" :class="{color}"/>
      <font-awesome-icon icon="fa-solid fa-circle" class="single-dot"
      @click="Right()" :class="{color}"/>
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
      color: 'black',
    };
  },
  methods: {
    Right() {
      if (this.activeindex !== 1) {
        this.activeindex += 1;
      }
    },
    Left() {
      if (this.activeindex !== 0) {
        this.activeindex -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.single-dot {
  cursor:pointer;
}
.black {
  color:black;
}
.blue {
  color:blue;
}
</style>
