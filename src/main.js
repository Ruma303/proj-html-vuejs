import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCartShopping, faMagnifyingGlass, faCheck, faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF, faTwitter, faGithub, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

Vue.config.productionTip = false;
library.add(
  faCartShopping,
  faMagnifyingGlass,
  faCheck,
  faFacebookF,
  faTwitter,
  faGithub,
  faInstagram,
  faCircle,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
