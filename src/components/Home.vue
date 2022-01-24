<template>
  <div class="home">
    <el-row :gutter="24" v-for="i in 3" :key="i">
      <el-col :span="8" v-for="item in picUrls" :key="item">
        <el-tooltip placement="top">
          <div slot="content">
              <p style="font-size:15px;">{{item.copyright}}</p>
              <p>日期：{{item.date}}</p>
              <p>下载：{{item.hsh}}</p>
          </div>
          <div class="animate__animated animate__pulse"><img alt="Vue logo" :src="'https://cn.bing.com'+ item.url"></div>
        </el-tooltip>
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
.home img {
  width: 100%;
  height: 100%;
}


.el-col {
  padding-right: 0 !important;
  width: 33%;
}
</style>