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
    <div class="header-jumbo container d-flex
    justify-content-around align-items-center">
      <div class="jumbo-left d-flex flex-column
        justify-content-between align-items-start m-auto my-0 px-3 gap-4">
        <h1>The biggest platform for your growth</h1>
        <p>There are many variations of passages of Lorem Ipsum
          aviable, but the majority suffered alternation in some
          form</p>
        <button class="btn btn-primary">Read More</button>
      </div>
      <div class="jumbo-right">
        <img src="../img/27-1.png" alt="" id="jumbo-img">
      </div>
    </div>
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
  #header-logo {
    width: 3rem;
  }
  & li:hover,
  .header-ico svg:hover {
    color: blue;
    cursor:pointer;
  }
  .header-link {
    font-size: 1.2rem;
  }
}
.header-bottom {
  // height: 20rem;
  .header-jumbo{
    background-color:rgb(241, 246, 255);
    @include full-size;
  }
  #jumbo-img{
    position: relative;
    top: 2.5rem;
  }
  h1 {
    line-height: 3.5rem;
    font-weight: 400;
    font-size: 3rem;
  }
  p {
    color: rgb(143, 153, 160);
    font-size: 1rem;
  }
}
</style>
