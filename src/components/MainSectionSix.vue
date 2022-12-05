<template>
  <div class="sec6-container container-fluid d-flex flex-column justify-content-center
  align-items-center">
    <h1 id="title">Contact with our team</h1>
    <p class="text-secondary mb-5">If you are planning on developing a product landing.</p>
    <div class="middle-div d-flex justify-content-start
    align-items-start gap-4 mt-5">
      <div class="map-jumbo d-flex flex-column">
        <img src="../img/StaticMapService.GetMapIma.png" alt="">
        <!-- {{cose}} -->
        Prova a stampare il messaggio qua
      </div>
      <div class="contact-div d-flex flex-column justify-content-start
      align-items-start">
        <img src="../img/35.png" alt="" class="mb-5">
        <h4 id="address">9840 Shore St. Found Du Lac, WI 54935</h4>
        <span class="text-secondary mt-2">0 1223 456 789</span>
        <span class="text-secondary mb-5">mail@softbox.com</span>
        <div class="icon-div d-flex gap-3 p-1 mb-5">
          <font-awesome-icon icon="fa-brands fa-facebook-f" class="icon-item text-primary" />
          <font-awesome-icon icon="fa-brands fa-twitter" class="icon-item text-primary" />
          <font-awesome-icon icon="fa-brands fa-github" class="icon-item text-primary" />
          <font-awesome-icon icon="fa-brands fa-instagram" class="icon-item text-primary" />
        </div>
        <div>
          <h3 id="form-title">Get in Touch</h3>
          <form class="mt-5 d-flex row row-cols flex-column gap-4 justify-content-center
            align-items-star">
            <div class="first-col row row-cols-2 px-0">
              <label for="name" class="col px-0">
                <input type="text" id="name" placeholder="Your Name" class="rounded px-3 py-1">
              </label>
              <label for="email" class="col px-0">
                <input type="email" id="email" placeholder="Your Email" class="rounded px-3 py-1">
              </label>
            </div>
            <label for="object" class="row p-0">
              <input type="text" id="object" placeholder="Your Subject" class="rounded px-3 py-1
              col">
            </label>
            <label for="text-area" class="row p-0">
              <textarea id="text-area" class="row rounded px-3 py-1 m-0 col"
               placeholder="Your Message">
              </textarea>
            </label>
            <button class="btn btn-primary send-button col-4">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSectionSix',
};
</script>

<style lang="scss" scoped>
.sec6-container {
  height: 50rem;
}
#title {
  font-weight: 400;
  font-size: 2rem;
}
#address {
  font-weight: 400;
}
.icon-item {
  box-shadow: 0 0 5px grey;
  padding: 1rem;
}
.contact-div {
  height: 100%;
  margin-left: 3rem;
}
#form-title {
  font-weight: 400;
  font-size: 1.8rem;
}
#send-button {
  width: fit-content;
}
</style>
