<template>
  <div class="all">
    <!--<video :src="v_src"></video>-->
    <!--<video src="http://v6.pstatp.com/video/c/a08072cc9160449db068042be05891d7/?Expires=1484650118&AWSAccessKeyId=qh0h9TdcEMrm1VlR2ad%2F&Signature=SZb9lp2UV6XjRCq7q9OE5N1eEiY%3D"></video>-->
    <video width="320" height="240" controls="controls" class="_video">
    <source src="http://192.168.2.20:9502/test.mp4" type="video/mp4">
    </video>
    <!--<div id="cont"></div>-->
    <!--<iframe id="bytedance-ba-cid-iframe" data-from="toutiao" src="//s3.bytecdn.cn/ta/resource/v0/crossDomain.html?v=0.1.15" style="display: none;"></iframe>-->
    <!--<div id=c1></div>-->
    <!--<div id=c2></div>-->
    <!--<div id=c3></div>-->
    <!--<div class="info" v-html="info"></div>-->
    <!--<div class="info"></div>-->
    <!--<iframe id="i_frame" style="width: 100%;position: relative;overflow-x: hidden;height: 100%;" :src="videoInfo"></iframe>-->
    <!--<iframe id="i_frame" style="width: 100%;position: relative;overflow-x: hidden;height: 100%;" src="http://v4.pstatp.com/b68e6483640c4e05ca099433dfacb7eb/587dee54/video/c/87d6353df9254f0b86ae85f6d7f158a3/"></iframe>-->
  </div>
</template>
<style scoped>
  .all {
    background-color: #ffffff;
    width: 100%;
    height: 536px;
  }
  ._video {
    /*height: 100%;*/
    width: 100%;
  }
  /*#c1,#c2,#c3{*/
    /*width:200px;*/
    /*height:400px;*/
    /*background-color:#459898;*/
    /*position:fixed;*/
  /*}*/
  /*#c1{*/
    /*top:50px;*/
    /*left:20px;*/
  /*}*/
  /*#c2{*/
    /*top:100px;*/
    /*left:260px;*/
  /*}*/
  /*#c3{*/
    /*top:150px;*/
    /*left:500px;*/
  /*}*/
</style>
<script>
  import newsInfo from '../assets/js/info.json'
  let xhr = new window.XMLHttpRequest()
  export default{
    data () {
      return {
        msg: '1111',
        info: '',
        videoInfo: '',
        remoteURL: '//i.snssdk.com/video/urls/v/1/toutiao/mp4/',
        videoID: 'd00d701f5b2e45de8792777f652357a8',
        nowTime: '',  //  当前时间的时间撮
        v_src: '',
        actionUrl: 'http://m.toutiao.com/list/?tag=news_military&ac=wap&count=20&format=json_raw&as=A145A8E7B418948&cp=5874A86924182E1&min_behot_time='   //  军事刷新请求url
      }
    },
    methods: {
      getNowTime () {
        this.nowTime = Date.parse(new Date()) / 1000
      },
      getNews () {
        this.getNowTime()
        let url = this.actionUrl + this.nowTime
        xhr.open('Get', url, true)
//        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.onload = function () {
          let response = JSON.parse(xhr.responseText)
          console.log('xhr response', response)
        }
        xhr.send()
      },
      getHoney () {
//        var t = Math.floor((new Date).getTime() / 1e3), e = t.toString(16).toUpperCase(), n = md5(t).toString().toUpperCase()
//        var t = 1484184466
        var e = '5876DB92'
        var n = '42F1D17FEF39E6E425AF1C122259D038'
        if (e.length !== 8) return {as: '479BB4B7254C150', cp: '7E0AC8874BB0985'}
        for (var o = n.slice(0, 5), i = n.slice(-5), a = '', r = 0; r < 5; r++)a += o[r] + e[r]
        for (var l = '', s = 0; s < 5; s++)l += e[s + 3] + i[s]
        console.log('@@@@@@@@@@@@@@@@@@@@@@@', {as: 'A1' + a + e.slice(-3), cp: e.slice(0, 3) + l + 'E1'})
      },
      base64encode (input) {
        let rv
        rv = encodeURIComponent(input)
        rv = encodeURI(rv)
        rv = window.btoa(rv)
        return rv
      },
      base64decode (input) {
        let rv
        rv = window.atob(input)
        rv = decodeURI(rv)
        rv = decodeURIComponent(rv)
        return rv
      },
      crc32 (e) {
        console.log('///////// crc32')
        console.log('!!!!!!e', e)
        var t = document.createElement('a')
        console.log('!!!!!!t', t)
        t.href = e
        console.log('!!!!!!t2', t)
        var r = (function () {
          for (var e = 0, t = new Array(256), r = 0; r !== 256; ++r) {
            e = r
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            e = 1 & e ? -306674912 ^ e >>> 1 : e >>> 1
            t[r] = e
          }
          return typeof Int32Array !== 'undefined' ? new Int32Array(t) : t
        }())
        console.log('!!!!!!r', r)
        console.log('!!!!!!t3', t)
        var n = function (e) {
          for (var t, n, o = -1, i = 0, a = e.length; i < a;) {
            t = e.charCodeAt(i++)
            t < 128 ? o = o >>> 8 ^ r[255 & (o ^ t)] : t < 2048 ? (o = o >>> 8 ^ r[255 & (o ^ (192 | t >> 6 & 31))], o = o >>> 8 ^ r[255 & (o ^ (128 | 63 & t))]) : t >= 55296 && t < 57344 ? (t = (1023 & t) + 64, n = 1023 & e.charCodeAt(i++), o = o >>> 8 ^ r[255 & (o ^ (240 | t >> 8 & 7))], o = o >>> 8 ^ r[255 & (o ^ (128 | t >> 2 & 63))], o = o >>> 8 ^ r[255 & (o ^ (128 | n >> 6 & 15 | (3 & t) << 4))], o = o >>> 8 ^ r[255 & (o ^ (128 | 63 & n))]) : (o = o >>> 8 ^ r[255 & (o ^ (224 | t >> 12 & 15))], o = o >>> 8 ^ r[255 & (o ^ (128 | t >> 6 & 63))], o = o >>> 8 ^ r[255 & (o ^ (128 | 63 & t))])
          }
          return o ^ -1
        }
        var o = t.pathname + '?r=' + Math.random().toString(10).substring(2)
        o[0] !== '/' && (o = '/' + o)
        var i = n(o) >>> 0
        return [t.protocol, t.hostname].join('//') + o + '&s=' + i
      },
      createVideo (src) {
//        var html = '<div>html</div><script>alert(1);<\/script>'
        var cont = document.getElementById('cont')
        cont.innerHTML = this.info
        var oldScript = cont.getElementsByTagName('script')[0]
        cont.removeChild(oldScript)
        var newScript = document.createElement('script')
        newScript.type = 'text/javascript'
        newScript.innerHTML = oldScript.innerHTML
        newScript.src = src
        cont.appendChild(newScript)
      }
    },
    watch: {
      info () {
        console.log('@@@@@@@@@@@@ location', window.location)
//        console.log('@@@@@@@@@@@@ listener', window.listener)
//        require('../assets/js/test')
//        require(_script[3])
        console.log('@@@@@@@@ info is changing', this.info)
        let _src = this.info.split('"')[3]
        console.log('@@@@@@@@@@@@ _src', _src)
//        this.createVideo(_src)
      }
    },
    mounted () {
//      window.location.host = 'm.toutiao.com'
      console.error('@@@@@@location', window.location)
      this.info = newsInfo.data.content
      console.log('this info ', this.info)
      let url = this.remoteURL + this.videoID
      let cai = this.crc32(url)
      let src = this.base64decode('')
      console.log('@@@@@@@@@@@@@@@ cai', cai)
      console.log('@@@@@@@@@@@@@@@ src', src)
      this.v_src = this.base64decode('aHR0cDovL3Y2LnBzdGF0cC5jb20vdmlkZW8vYy9mNGFiZjQ3MGVjMDc0YmE3OTFmODJhZTAyNGZjOTc0MC8/RXhwaXJlcz0xNDg0NjQ4Njk3JkFXU0FjY2Vzc0tleUlkPXFoMGg5VGRjRU1ybTFWbFIyYWQlMkYmU2lnbmF0dXJlPW5mZ1gxcEFxOTBCbldtQ01wTWdnWkZCcDQxayUzRA==')
//      document.getElementsByClassName('info')[0].innerHTML = this.info
//      document.open()
//      document.write(this.info)
//      document.close()
      this.$nextTick(() => {
      })
//      console.log('@@@@@@@@@@@@@@@@@ i_frame', document.getElementById('i_frame').contentWindow.document.body)
//      document.getElementById('i_frame').contentWindow.document.body.innerHTML = this.info
//      document.getElementById('i_frame').contentWindow.document.body.innerHTML = html
      console.log('this info', newsInfo)
      console.log('this info btoa', this.base64encode(this.info))
      this.videoInfo = 'data:text/html;charset=utf-8,' + this.info
      this.nowTime = Date.parse(new Date()) / 1000
//      this.getNews()
      console.log('@@@@@@@@@ nowTime', this.nowTime)
//      console.log('@@@@@@@@@ mounted is readying')
//      let date = new Date()
//      let time1 = 10
//      let time = date.setHours(time1)
//      console.log('time', time)
//      console.log('date time', date.getHours())
      console.log('mounted is readying')
//      let $array1 = [1, 2, 3, 4, 5]
//      console.log('@@@@@@@@$array1', $array1)
//      $array1.constructor.prototype.test1 = function () {
//        console.log('@@@@@@@ test')
//      }
//      for (let i = 0; i < $array1.length; i++) {
//        console.log('@@@@@ for ', $array1[i])
//      }
//      for (let inner in $array1) {
//        console.log('@@@@@@@@@ for in', $array1[inner])
//        if ($array1.hasOwnProperty(inner)) {
//          console.log('@@@@@@@@@@ for has', $array1[inner])
//        }
//      }
      this.getHoney()
    }
  }
</script>
