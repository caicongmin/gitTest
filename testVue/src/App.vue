<template>
  <!--@mousemove="mousemove"-->
  <div id="app" >
    <!--<img src="./assets/svg-loaders/oval.svg" width="40" alt="" style="background-color: red">-->
    <!--<p class="test" v-text="testCai1"></p>-->
    <!--testCai:<input v-model="testCai">-->
    <!--<button @click="btnClick(1)">router跳转1</button>-->
    <!--<button @click="btnClick(2)">router跳转2</button>-->
    <keep-alive>
      <router-view class="app-child-view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
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
  data () {
    return {
      testCai: '111'
    }
  },
  computed: {
    testCai1: {
      set () {
      },
      get (value) {
        let val = Number(value.testCai)
        return val
      }
    }
  },
  watch: {
    testCai1 (newValue, oldValue) {
      console.log('newValue', newValue)
      console.log('oldValue', oldValue)
      let val = newValue
      if (val !== Math.floor(val)) {
        val = Math.floor(val)
      }
      console.log('val', val)
      if (isNaN(val)) {
        this.testCai = ''
      } else {
        this.testCai = val
      }
      console.log('this.testCai', this.testCai)
    }
  },
  mounted () {
    console.log('@@@@@@@@@@this.store', this.store)
    console.log('@@@@@@@@@@ this.$store', this.$store)
    console.log('@@@@@@@@@@ store', store)
    console.log('@@@@@@@@@@ vuex', Vuex)
    console.log('@@@@@@@@@@ vuerouter', this.$router)
    console.log('@@@@@@@@@@ vuerouter', this.$route)
    store.commit('increment')
  },
  methods: {
    mousemove () {
      console.log('@@@@@@@@@@@@@@@2')
    },
    btnClick (index) {
      if (Number(index) === 1) {
        this.$router.push('/foo')
      } else if (Number(index) === 2) {
        this.$router.push('/bar')
      }
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
  .app-child-view {
    width: 100%;
  }
</style>
