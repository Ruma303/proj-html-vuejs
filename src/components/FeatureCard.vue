<template>
  <div class="container-card d-flex flex-column align-items-start
  card justify-content-center">
    <h5 class="m-0">{{cardTitle}}</h5>
    <!-- <img :src="src" alt=""> -->
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    cardTitle: String,
    src: String,
  },
};
</script>

<style lang="scss" scoped>
.container-card {
  max-width: 15rem;
  height: 8rem;
  h5 {
    font-size: 1rem;
  }
}
</style>
