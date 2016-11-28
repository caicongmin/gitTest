import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)
Vue.use(Vuex)
/* eslint-disable no-new */
window.onerror = function (err, errUrl, errLine) {
  console.error('error =>' + err + '\n errUrl => ' + errUrl + '\n errLine => ' + errLine)
}
Vue.config.errorHandler = function (err, vm) {
  //  致命错误
  console.error('componentName: ' + vm.$data.componentName + ' error => ', err)
}

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
