<template>
  <div :style="{backgroundImage:'url('+bgUrl+')'}" class="photo" >
      <div class="nav animate__animated animate__pulse">
          <div class="lop"><el-button size="small" @click="back()" style="background-color:rgba(255, 255, 255, 0.8);"><i class="el-icon-back"></i>返回</el-button></div>
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
            dialogVisible:false,
            imgInfo:{}
        }
    },
    created(){
        this.tips()
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
        tips() {
            const h = this.$createElement;

            this.$notify({
                title: 'Tips',
                message: h('i', { style: 'color: teal'}, '下载壁纸及其他功能请访问PC版'),
                offset: 100
            });
        }
    }
}
</script>

<style lang="css" scoped>
.photo {
    width:auto;
    height:100vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;

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

i {
    padding-right: 3px;
}

.copyright {
    position: fixed;
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

.el-row {
    padding-bottom: 2px;
}
</style>