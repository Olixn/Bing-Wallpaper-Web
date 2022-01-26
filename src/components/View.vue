<template>
  <div class="view">
    <div v-if="imgInfo == ''">
        <p>Error~</p>
    </div>
    <div class="container animate__animated animate__pulse" v-else>
        <img :src="'https://cn.bing.com'+imgInfo.url" alt="" class="image">
        <div class="overlay">
            <div class="text">
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:24px;">{{imgInfo.copyright}}</p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:20px;"><i class="el-icon-date"> {{imgInfo.date}}</i></p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:20px;"><i class="el-icon-download"> 9999</i></p>
              <a :href="'https://cn.bing.com'+imgInfo.url" style="margin-block-end:10px; margin-block-start:2px; font-size:20px; color:write;"><i class="el-icon-paperclip"> Download</i></a>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgInfo:{
          "date": "20220124",
          "urlbase": "/th?id=OHR.ManhattanView_ZH-CN3156325644",
          "url": "/th?id=OHR.ManhattanView_ZH-CN3156325644_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
          "copyright": "灯光璀璨的曼哈顿下城，美国纽约 (© New York On Air/Offset/Shutterstock)",
          "hsh": "50126038cc765a7a91e30da3797bb0ca",
        },
        }
    },
    created() {
        let h = this.$route.params.hash
        console.log(h)
        this.imgUrl = h
    }
}

</script>

<style lang="css" scoped>
.view {
  width: 100%;
  height: 100%;
}
.container {
  position: relative;
  width: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 20px;
  text-align: left;
}

</style>