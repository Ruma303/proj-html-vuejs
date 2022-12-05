<template>
  <div class="container d-flex row row-cols-2">
    <div class="container-left container d-flex flex-column gap-4">
      <div class="top-container">
        <h3 id="title">Get tips tricks on how to <br> skyrocket your sales.</h3>
        <p class="text-secondary">
          Faff about only a quid blower I don't want no agro bleeding chimney pot burke tosser
          cras nice one boot fanny!
        </p>
      </div>
      <div class="bottom-container d-flex"
      v-for="item in arrData"
      :key="item.src">
      <img :src="`../img/${item.src}.png`" alt="">
      <div>
        <h5>{{item.title}}</h5>
        <p class="text-secondary">{{item.paragraph}}</p>
      </div>
      </div>
    </div>
    <img src="../img/509.jpeg" alt="">
  </div>
</template>

<script>
export default {
  name: 'MainSectionOne',
  data() {
    return {
      arrData: [
        {
          src: '510',
          title: 'Reporting Analysis',
          paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
          src: '511',
          title: 'Technical SEO Audit',
          paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container-left{
  #title {
    line-height: 3.5rem;
    font-weight: 450;
    font-size: 2rem;
  } p {
    font-size: 1rem;
  }
  .bottom-container img {
    width: 3rem;
  }
}
</style>
