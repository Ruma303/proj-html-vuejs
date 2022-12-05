<template>
  <div class="card lastpost-container" style="width: 18rem;">
    <img class="card-img-top" :src="src" :alt="title">
    <div class="date-container text-secondary">{{date}}</div>
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{paragraph}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastestPost',
  props: {
    name: String,
    title: String,
    paragraph: String,
    date: String,
    src: String,
  },
};
</script>

<style lang="scss" scoped>
.lastpost-container {
  border: solid 1px #EFF1FE;
}
.date-container{
  padding: 1rem;
  position: absolute;
  top: .5rem;
  left: .5rem;
  background-color: #00000008;
}
</style>
