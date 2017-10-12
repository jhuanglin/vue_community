// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * 封装localStorage操作
 */
import { setStore, getStore, removeStore, formatDate} from './utils/utils'

Vue.prototype.$setStore = setStore;
Vue.prototype.$getStore = getStore;
Vue.prototype.$removeStore = removeStore;


// 实例化Vue的过滤器 
Vue.filter('formatDate', formatDate);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
