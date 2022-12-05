<template>
  <div>
    <section class="section1 d-flex justify-content-center align-items-center container p-0 py-5">
      <onlineMarketing />
      <onlineMarketing />
      <onlineMarketing />
    </section>
  </div>
</template>

<script>
import onlineMarketing from './onlineMarketing.vue';

export default {
  name: 'MainPage',
  components: {
    onlineMarketing,
  },
};
</script>

<style lang="scss" scoped>
.section1{
  margin: 5rem;
}
</style>
