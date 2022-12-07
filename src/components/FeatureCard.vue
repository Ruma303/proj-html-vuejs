<template>
  <div class="container-card d-flex flex-column align-items-start
  card justify-content-evenly px-4"
  @mouseenter="hover = true"
  @focusin="(hover = true)"
  @mouseleave="hover = false"
  @focusout="(hover = false)">
    <h5 class="m-0">{{cardTitle}}</h5>
    <font-awesome-icon
    :icon="'fa-regular ' + icon"
    :style="{
      color: hover ? 'white' : color,
      fontSize: '2rem',
      }"
      />
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    cardTitle: String,
    icon: String,
    color: String,
  },
  data() {
    return {
      prefix: 'fa-regular ',
      hover: false,
    };
  },
  methods: {
    generateIcon() {
      return this.prefix + this.icon;
    },
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
