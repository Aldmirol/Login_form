import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faEye, faEyeSlash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
