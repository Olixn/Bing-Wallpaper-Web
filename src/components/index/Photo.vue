<template>
  <div :style="{backgroundImage:'url('+bgUrl+')'}" class="photo" >
      <div class="nav animate__animated animate__pulse">
          <div class="lop"><el-button size="small" @click="back()" style="background-color:rgba(255, 255, 255, 0.8);"><i class="el-icon-back"></i>返回</el-button></div>
          <div class="rop">
              <el-button size="small" @click="back()" style="background-color:rgba(255, 255, 255, 0.8);"><i class="el-icon-share"></i>分享</el-button>
              <el-button size="small" @click="download()" style="background-color:rgba(255, 255, 255, 0.8);"><i class="el-icon-download"></i>下载</el-button>
          </div>
      </div>
      <div class="copyright">
            <p style="margin-block-end:10px; margin-block-start:2px; font-size:24px;">{{imgInfo.copyright}}</p>
            <p style="margin-block-end:10px; margin-block-start:2px;"><i class="el-icon-date"> {{imgInfo.enddate}}</i></p>
            <p style="margin-block-end:10px; margin-block-start:2px;"><i class="el-icon-view"> {{imgInfo.view}}</i></p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgInfo:{}
        }
    },
    created(){
        this.id = this.$route.query.id
        this.imgInfo = JSON.parse(decodeURIComponent(this.$route.query.imgInfo))
        this.$axios.put(`/view/${this.imgInfo.id}`).then((data)=>{console.log("Hello！Thanks For Your Love.")})
    },
    computed:{
        bgUrl(){
            let bgurl = "https://cn.bing.com" + this.imgInfo.urlbase + "_1920x1080.jpg"
            return bgurl
        }
    },
    methods:{
        back() {
            this.$router.go(-1)
        },
        download() {
            this.$axios.get('/download',{
                params:{
                "copyright": this.imgInfo.copyright,
                "urlBase": this.imgInfo.urlbase
                },
                responseType: 'blob'}
            ).then((data)=>{
                let blob = data.data
                let reader = new FileReader()
                reader.readAsDataURL(blob)
                reader.onload = (e) => {
                let a = document.createElement('a')
                    a.download = this.imgInfo.copyright + ".jpg"
                    a.href = e.target.result
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                }
            })
        }
    }
}
</script>

<style lang="css" scoped>
.photo {
    width:auto;
    height:100vh;
    min-width:973px;
    background-repeat:no-repeat;
    background-size:cover;

}
.nav {
    position: relative;
    height: 20px;
    width: 100%;
}
.lop {
    position: absolute;
    left: 30px;
    padding-top: 20px;
}
.rop {
   position: absolute;
   right: 30px;
   padding-top: 20px; 
}
.copyright {
    position: fixed;
    height: 100px;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: .1rem;
    color: #fff;
    background: rgba(1, 1, 1, 0.5);
    text-align: left;
}
.copyright p{
    padding-left: 20px;
}
</style>