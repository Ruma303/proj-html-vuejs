<template>
  <div class="footer-container container-fluid d-flex
    justify-content-around align-items-center p-5 row row-cols-4">
  <div class="footer-div d-flex flex-column
    justify-content-around align-items-start">
    <div class="sub-div-top">
      <img src="../img/35.png" alt="">
      <p class="text-secondary">
        It is a long established fact that a reader will be distracted by the readable content.</p>
    </div>
    <span class="text-secondary">Copyright @ 2018 <span class="text-primary">Softbox</span></span>
  </div>
  <div class="footer-div d-flex flex-column
    justify-content-around align-items-start col">
    <ul>
      <h5>Menu</h5>
      <li class="text-secondary"
      v-for="item in arrMenu"
      :key="item">{{item}}</li>
    </ul>
  </div>
  <div class="footer-div d-flex flex-column
    justify-content-around align-items-start col">
    <ul>
      <h5>About Us</h5>
      <li class="text-secondary"
      v-for="item in arrAboutUs"
      :key="item">{{item}}</li>
    </ul>
  </div>
  <div class="footer-div d-flex flex-column
    justify-content-around align-items-start col">
    <ul>
      <h5>Quick Links</h5>
      <li class="text-secondary"
      v-for="item in arrMenu"
      :key="item">{{item}}</li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data() {
    return {
      arrMenu: ['About us', 'Theme', 'Features', 'Pricing', 'Blog'],
      arrAboutUs: ['About SoftBox', 'Roadmap', 'How it Work', 'Team', 'News'],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  border-top: 1px solid rgb(236, 236, 236);
  margin-top: 10rem;
}
</style>
