<template>
  <div class="sec6-container container-fluid d-flex flex-column justify-content-center
  align-items-center">
    <h1 id="title">Contact with our team</h1>
    <p class="text-secondary mb-5">If you are planning on developing a product landing.</p>
    <div class="middle-div d-flex justify-content-start
    align-items-start gap-4 mt-5">
      <div class="map-jumbo d-flex flex-column">
        <img src="../img/map.png" alt="">
        <div class="output">
          <h5 v-if="nameStr.length">Il tuo nome è: <span class="text-secondary">
            {{nameStr}}</span></h5>
          <h5 v-if="emailStr.length">La tua mail è: <span class="text-secondary">
            {{emailStr}}</span></h5>
          <h5 v-if="subjectStr.length">Oggetto: <span class="text-secondary">
            {{subjectStr}}</span></h5>
          <h5 v-if="messageStr.length">Il tuo messaggio: <span class="text-secondary">
            {{messageStr}}</span></h5>
        </div>
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
          <form @submit.prevent="print"
          class="mt-5 d-flex flex-column gap-4 justify-content-center
            align-items-star">
            <div class="first-col p-0 d-flex gap-3">
              <label for="name" class="p-0">
                <input type="text" id="name" placeholder="Your Name" class="rounded half-col"
                v-model="nameStr">
              </label>
              <label for="email" class="p-0">
                <input type="email" id="email" placeholder="Your Email" class="rounded half-col"
                v-model="emailStr">
              </label>
            </div>
            <label for="object" class="p-0">
              <input type="text" id="object" placeholder="Your Subject" class="rounded
              full-col"
              v-model="subjectStr">
            </label>
            <label for="text-area" class="p-0">
              <textarea id="text-area" class="rounded m-0 full-col"
               placeholder="Your Message" rows="5"
               v-model="messageStr">
              </textarea>
            </label>
            <button class="btn btn-primary send-button" type="submit">
              Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSectionSix',
  data() {
    return {
      nameStr: '',
      emailStr: '',
      subjectStr: '',
      messageStr: '',
    };
  },
  methods: {
    print() {
      console.log(this.nameStr, this.emailStr, this.subjectStr, this.messageStr);
    },
  },
};
</script>

<style lang="scss" scoped>
.sec6-container {
  height: 50rem;
  .map-jumbo {
    max-width: 35rem;
    overflow-wrap: break-word;
  }
  .map-jumbo img {
    width: 35rem;
    margin-bottom: 1rem;
  }
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
form {
  input.half-col {
    width: 10rem;
    padding: .3rem;
    border: 1px solid lightblue;
  }
  input.full-col,
  textarea.full-col {
    width: 21rem;
    padding: .3rem;
    border: 1px solid lightblue;
  }
  .send-button {
    width: fit-content;
    white-space: nowrap;
    &:hover {
    color: white;
    background-color: black;
    }
  }
}
</style>
