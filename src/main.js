import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);


Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
