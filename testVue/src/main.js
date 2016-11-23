import Vue from 'vue'
import App from './App'
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)
/* eslint-disable no-new */
window.onerror = function (err, errUrl, errLine) {
  console.error('error =>' + err + '\nerrUrl => ' + errUrl + '\nerrLine => ' + errLine)
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
