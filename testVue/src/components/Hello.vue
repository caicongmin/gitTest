<template>
  <div class="hello">
    <span>高度: </span><input type="text" v-model.lazy="heightInfo" >px
    <span>宽度: </span><input type="text" v-model.lazy="widthInfo">px

    <chartjs-line :labels="labels" :data="labelData" :width="width" :height="height" :beginzero="beginzero" :datalabel="datalabel" :linetension="linetension" v-if="upDate"></chartjs-line>
  </div>
</template>

<script>
const labelDataTable = () => { return [20, 60, 40, 50, 500] }
const labels = () => { return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60] }
export default {
  name: 'hello',
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
      linetension: 0.2
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
</style>
