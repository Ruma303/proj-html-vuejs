<template>
  <div class="marketing-container container d-flex
    justify-content-around align-items-start gap-2 p-0">
    <img src="../img/24.png" alt="">
    <div class="left-container d-flex flex-column
    justify-content-center">
      <h3>Online Marketing</h3>
      <p>It is a long established fact that a reader will be distracted</p>
      <div class="bottom-div d-flex">
        <ul class="d-flex flex-column p-0 m-0">
          <li v-for="item in arrMarketing"
          :key="item"
          class="d-flex align-items-center gap-3">
          <font-awesome-icon icon="fa-solid fa-check" class="text-primary"/><span class="item">
            {{item}}</span>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSectionOne',
  data() {
    return {
      arrMarketing: ['SEO', 'SEM', 'Website Strategies', 'Social management'],
    };
  },
};
</script>

<style lang="scss" scoped>
.marketing-container{
  img{
    width: 5rem;
  } h3 {
    font-size: 1.3rem;
    font-weight: 500;
  } p {
    color: rgb(143, 153, 160);
    font-size: 1rem;
  } .item {
    font-weight: 600;
  }
}
</style>
