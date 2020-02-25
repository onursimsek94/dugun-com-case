import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { i18n } from '@/plugins/vue-i18n'
import '@/plugins/dc-ui'
import '@/plugins/element'
import './assets/style/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
