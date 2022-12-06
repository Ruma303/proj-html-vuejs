<template>
  <div class="sec5-container container-fluid d-flex flex-column justify-content-center
  align-items-center">
    <h1 id="title">Lastest Post</h1>
    <p class="text-secondary mb-5">If you are planning on developing a product landing.</p>
    <div class="cards-container d-flex gap-3 mt-5">
      <LastestPost
      v-for="item in arrData"
      :key="item.src"
      :title="item.title"
      :paragraph="item.paragraph"
      :src="`/img/${item.src}.jpg`"
      :date="item.date"
      class="lastpost-card"
      />
    </div>
  </div>
</template>

<script>
import LastestPost from './LastestPost.vue';

export default {
  name: 'MainSectionFive',
  components: {
    LastestPost,
  },
  data() {
    return {
      arrData: [
        {
          src: '18',
          title: 'Life Lack Meaning',
          paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          date: 'DATA DI PROVA',
        },
        {
          src: '19',
          title: 'Life Lack Meaning',
          paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          date: '',
        },
        {
          src: '17',
          title: 'Life Lack Meaning',
          paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          date: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sec5-container {
  height: 30rem;
}
#title {
  font-weight: 400;
  font-size: 2rem;
}
</style>
