<template>
  <div class="home">
    <el-row :gutter="24" v-for="i in 3" :key="i">
      <el-col :span="8" v-for="item in picUrls" :key="item">
        <div class="container animate__animated animate__pulse">
          <img :src="'https://cn.bing.com'+ item.url" class="image">
          <div class="overlay">
            <div class="text">
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:14px;">{{item.copyright}}</p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:10px;">日期：{{item.date}}</p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:10px;">下载：{{item.hsh}}</p>
            </div>
          </div>
        </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      picUrls:[
        {
          "date": "20220124",
          "urlbase": "/th?id=OHR.ManhattanView_ZH-CN3156325644",
          "url": "/th?id=OHR.ManhattanView_ZH-CN3156325644_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
          "copyright": "灯光璀璨的曼哈顿下城，美国纽约 (© New York On Air/Offset/Shutterstock)",
          "hsh": "50126038cc765a7a91e30da3797bb0ca",
        },{
          "date": "20220124",
          "urlbase": "/th?id=OHR.ManhattanView_ZH-CN3156325644",
          "url": "/th?id=OHR.ManhattanView_ZH-CN3156325644_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
          "copyright": "灯光璀璨的曼哈顿下城，美国纽约 (© New York On Air/Offset/Shutterstock)",
          "hsh": "50126038cc765a7a91e30da3797bb0ca",
        },
        {
          "date": "20220124",
          "urlbase": "/th?id=OHR.ManhattanView_ZH-CN3156325644",
          "url": "/th?id=OHR.ManhattanView_ZH-CN3156325644_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
          "copyright": "灯光璀璨的曼哈顿下城，美国纽约 (© New York On Air/Offset/Shutterstock)",
          "hsh": "50126038cc765a7a91e30da3797bb0ca",
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>


.el-col {
  padding-right: 0 !important;
  padding-left: 0 !important;
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
  opacity: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  opacity: 1;
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