<template>
  <div class="hello" @scroll="scroll">
   <button @click="toUrl">点击跳转</button>
    <vue-core-image-upload v-bind:class="['pure-button','pure-button-primary','js-btn-crop']" v-bind:crop="true"
                           url="http://proxy_pass.service.yiyuan.zhannnnn.top/User_upload"
                           :cropBtn="{ok:'Save','cancel':'Give Up'}"
                           v-on:errorhandle="func"
                           extensions="png,gif,jpeg,jpg" v-on:imageuploaded="imageuploaded"></vue-core-image-upload>
    <img :src="src">
    <h1>{{ count }}</h1>
    <span>高度: </span><input type="text" v-model.lazy="heightInfo" >px
    <span>宽度: </span><input type="text" v-model.lazy="widthInfo">px
    <chartjs-line :labels="labels" :data="labelData" :width="width" :height="height" :beginzero="beginzero" :datalabel="datalabel" :linetension="linetension" v-if="upDate"></chartjs-line>
    <!--<address-components-->
      <!--:initprovselectedvalue="19"-->
      <!--:initcityselectedvalue="289"-->
      <!--:initregionselectedvalue="3039"-->
      <!--initaddrsindetail="新塘">-->
    <!--</address-components>-->
    <area-components :show.sync="show" :result.sync="result"></area-components>
    <!--<yt-address-->
    <!--:initprovselectedvalue="provId"-->
    <!--:initcityselectedvalue="cityId"-->
    <!--:initregionselectedvalue="regionId"-->
    <!--@getProvId="getProvId"-->
    <!--@getCityId="getCityId"-->
    <!--@getRegionId="getRegionId">-->
    <!--</yt-address>-->
    <!--<address-picker :opts="obj" v-model="address"></address-picker>-->
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue2.x-core-image-upload'
import Address from './address.vue'
import vueArea from './vue-area.vue'
const labelDataTable = () => { return [20, 60, 40, 50, 500] }
const labels = () => { return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60] }
export default {
  name: 'hello',
  components: {
    'vue-core-image-upload': VueCoreImageUpload,
    'address-components': Address,
    'area-components': vueArea
  },
  methods: {
    toUrl () {
      window.open('http:///www.baidu.com.zip')
    },
    scroll (event) {
//      console.log('scroll', event)
    },
    func: function (res) {
      console.log('func', res)
    },
    imageuploaded: function (res) {
      console.log('res', res)
      if (res.ok) {
        this.src = 'http://res.zhan.ykxing.com:8000/work/yiyuanYYbi/service/' + res.fileInfo[0].path
      }
    },
    getProvId (id, value) {
      console.log('getProvId id value', id, value)
      this.provId = Number(id)
      this.provName = value
      this.getAddress()
    },
    getCityId (id, value) {
      console.log('getCityId id value', id, value)
      this.cityId = Number(id)
      this.cityName = value
      this.getAddress()
    },
    getRegionId (id, value) {
      console.log('getRegionId id value', id, value)
      this.regionId = Number(id)
      this.regionName = value
      this.getAddress()
    },
    getAddress () {
      this.address = this.provName + ' ' + this.cityName + ' ' + this.regionName
    }
  },
  mounted () {
//    console.log('this.$nextTick', this.$nextTick)
    console.log('this', this)
//    console.dir(this.$nextTick)
    this.$nextTick(() => {
      console.log('@@@@@@@@@@!!!!!!!!!!!!!!cai')
    })
    console.log('@@@@@@@@@@@@ mounted', this.$store)
    console.log('@@@@@@@@@@@@ state', this.$store.state)
    console.log('@@@@@@@@@@@@ count', this.$store.state.count)
    this.$store.commit('increment')
    console.log('@@@@@@@@@@@@ count', this.$store.state.count)
  },
  data () {
    return {
      upDate: true,
      datalabel: '在线人数',
      beginzero: false,
      labels: labels(),
      labelData: labelDataTable(),
      width: 500,
      height: 500,
      heightInfo: '',
      widthInfo: '',
      linetension: 0.2,
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      result: null,
      show: true
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  watch: {
    heightInfo () {
      console.log(' height is changed  11111111')
      let heightInfo = Number(this.heightInfo)
      if (heightInfo && heightInfo > 0) {
        console.log(' height is changed 22222222')
        this.upDate = false

        this.height = heightInfo
        this.$nextTick(() => {
          this.upDate = true
        })
      }
    },
    widthInfo () {
      console.log(' widthInfo is changed  11111111')
      let widthInfo = Number(this.widthInfo)
      if (widthInfo && widthInfo > 0) {
        console.log(' widthInfo is changed 22222222')
        this.upDate = false
        this.width = widthInfo
        this.$nextTick(() => {
          this.upDate = true
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 1000px;
    overflow: auto;
  }
</style>
