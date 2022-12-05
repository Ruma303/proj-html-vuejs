<template>
  <div class="card testimonial-card" style="width: 18rem;">
    <img class="card-img-top rounded-cirle" :src="src" alt="">
    <div class="card-body">
      <span class="card-title h5">{{name}}</span>
      <span class="text-secondary"> - {{profession}}</span>
      <p class="card-text text-secondary">{{quote}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    name: String,
    profession: String,
    quote: String,
    src: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
