import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import addressPicker from 'vue-address-picker'
import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'
import 'chart.js'
import 'hchs-vue-charts'
import routes from './router'
Vue.use(window.VueCharts)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(addressPicker)
Vue.use(ElementUI)
locale.use(lang)
/* eslint-disable no-new */
window.onerror = function (err, errUrl, errLine) {
  console.error('error =>' + err + '\n errUrl => ' + errUrl + '\n errLine => ' + errLine)
}
Vue.config.errorHandler = function (err, vm) {
  //  致命错误
  console.error('componentName: ' + vm.$data.componentName + ' error => ', err)
}
const router = new VueRouter({
  mode: process.env.NODE_ENV !== 'development' ? 'hash' : 'history',  //  路由模式 默认hash模式
  routes // （缩写）相当于 routes: routes
})
console.log('@@@@@@@@@@@@@@@ process.platform', process)
console.dir(process.env)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
