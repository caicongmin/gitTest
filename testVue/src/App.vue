<template>
  <div id="app">
    <img src="./assets/svg-loaders/oval.svg" width="40" alt="" style="background-color: red">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default {
  name: 'app',
  components: {
    Hello
  },
  mounted () {
    console.log('@@@@@@@@@@this.store', this.store)
    console.log('@@@@@@@@@@ this.$store', this.$store)
    console.log('@@@@@@@@@@ store', store)
    console.log('@@@@@@@@@@ vuex', Vuex
    store.commit('increment')
  },
  methods: {
    mousemove () {
      console.log('@@@@@@@@@@@@@@@2')
    }
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
