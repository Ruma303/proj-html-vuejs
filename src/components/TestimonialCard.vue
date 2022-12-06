<template>
  <div class="card testimonial-card ">
    <img class="card-img-top rounded-circle image offset-4" :src="src" alt="">
    <div class="card-body text-center">
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
.testimonial-card{
  width: 20rem;
  height: 25rem;
  .image{
    width: 5rem;
    padding-top: 1rem;
  }
}
</style>
