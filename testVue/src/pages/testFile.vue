<template>
    <div>
      <div>this is template body</div>
      <div>
        <input type="file"  id="11111" @change="previewFile">
        <button @click="submit" style="disblock: none">提交</button>
      </div>
      <img :src="src">
    </div>
</template>
<style scoped>
    body{
        background-color:#ff0000;
    }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        src: ''
      }
    },
    mounted () {
      let input = document.querySelector('input[type=file]').target
      console.log('@@@@@@@@@@@@@@@@ input', input)
      console.dir(input)
    },
    methods: {
      submit () {
        console.log('@@@@@@@@@@ 提交')
        let fd = new window.FormData()
        let xhr = new window.XMLHttpRequest()
        let blob
//        fd.append('file', this.src)
//        fd.append('type', '/.img')
//        xhr.open('post', 'http://proxy_pass.service.yiyuan.zhannnnn.top/User_upload')
//        xhr.send(fd)
//        xhr.onload = function (e) {
//          console.log('@@@@@xhr', this.result)
//          let response = JSON.parse(xhr.responseText)
//          console.log('xhr response', response)
//        }
        let binaryString = window.atob(this.src.split(',')[1])
        let mimeType = this.src.split(',')[0].match(/:(.*?);/)[1]
        let length = binaryString.length
        let u8arr = new Uint8Array(length)
//        console.log('@@@@@@@@@@ binaryString', binaryString)
//        console.log('@@@@@@@@@@ mimeType', mimeType)
//        console.log('@@@@@@@@@@ u8arr', u8arr)
        while (length--) {
          u8arr[length] = binaryString.charCodeAt(length)
        }
        blob = new window.Blob([u8arr.buffer], {type: mimeType})
        console.log('@@@@@@@@2 blob', blob)
        fd.append('file', blob)
        xhr.open('post', 'http://proxy_pass.service.yiyuan.zhannnnn.top/User_upload')
        xhr.onload = function () {
          let response = JSON.parse(xhr.responseText)
          console.log('xhr response', response)
        }
        xhr.send(fd)
      },
      previewFile (e) {
        console.log(e.target.files)
        console.log(e.target.files[0])
        let file = e.target.files[0]
        let fr = new window.FileReader()
//        let blob
        let oldThis = this
        fr.onload = function () {
//          console.log('@@@@@@@@@@@ fr.onload', this.result)
          oldThis.src = this.result
          oldThis.blob = new window.Blob([this.result])
          console.log('blob', oldThis.blob)
        }
        //  http://proxy_pass.service.yiyuan.zhannnnn.top/User_upload
        fr.readAsDataURL(file)
      }
    }
  }

</script>
