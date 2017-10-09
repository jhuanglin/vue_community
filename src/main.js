// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * 封装localStorage操作
 */
import { setStore, getStore, removeStore} from './utils/utils'

Vue.prototype.$setStore = setStore;
Vue.prototype.$getStore = getStore;
Vue.prototype.$removeStore = removeStore;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
