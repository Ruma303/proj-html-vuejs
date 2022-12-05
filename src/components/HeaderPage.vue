<template>
  <div>
    <nav class="header-top container-fluid d-flex
    justify-content-around align-items-center m-0 p-0">
      <img src="../img/logo-2.png" alt="" id="header-logo">
      <ul class="d-flex justify-content-around align-items-center gap-4">
        <li class="header-link">Home</li>
        <li class="header-link">About us</li>
        <li class="header-link">Feature</li>
        <li class="header-link">Testimonials</li>
        <li class="header-link">Contact US</li>
        <span class="header-ico d-flex justify-content-around
        align-items-center gap-4">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="header-link"/>
          <font-awesome-icon icon="fa-solid fa-cart-shopping" class="header-link"/>
        </span>
        <button class="btn btn-primary">Get Started</button>
      </ul>
    </nav>
    <div class="header-bottom container-fluid d-flex
    justify-content-center align-items-center mx-auto p-0">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@mixin full-size {
  height: 100%;
  width: 100%;
}
.header-top {
  background-color: white;
  height: 5rem;
  & li:hover,
  .header-ico svg:hover {
    color: blue;
    cursor:pointer;
  }
  .header-link {
    font-size: 1.2rem;
  }
}
#header-logo {
  width: 3rem;
}
.header-bottom {
  background-color: blue;
  height: 20rem;
}
</style>
