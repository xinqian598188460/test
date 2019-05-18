import Vue from 'vue'
import index from './index.vue'
import vueRouter from './router/index'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(index), router: vueRouter
}).$mount('#app')
