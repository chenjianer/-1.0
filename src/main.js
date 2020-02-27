import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';
import highcharts from 'highcharts';
Vue.use(highcharts);
import store from './vuex/store'
import Api from './api'
import Vuex from 'vuex';
Vue.prototype.axios = Axios;
Vue.prototype.api = Api;
/**全局更新的方法 */
Vue.prototype.reload = function () {
  this.isRouterAlive = false;
  this.$nextTick(function () {
    this.isRouterAlive = true
  })
}
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false
import './axios/axios'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
