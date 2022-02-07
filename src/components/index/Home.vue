<template>
  <div class="home">
    <el-row :gutter="24">
      <el-col :span="8" v-for="item in picUrls" :key="item.id">
        <div class="container animate__animated animate__pulse">
          <img :src="'https://cn.bing.com'+ item.url" class="image">
          <div class="overlay" @click="showBig(item)">
            <div class="text">
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:14px;">{{item.copyright}}</p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:10px;"><i class="el-icon-date"> {{item.enddate}}</i></p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:10px;"><i class="el-icon-view"> {{item.view}}</i></p>
              <p style="margin-block-end:10px; margin-block-start:2px; font-size:10px;" class="opline">
                <el-button size="mini" @click.stop="download(item)" style="background-color:rgba(255, 255, 255, 0.8);"><i class="el-icon-download">下载</i></el-button>
              </p>
            </div>
          </div>
        </div>
        </el-col>
    </el-row>

    <div style="margin:10px;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page=queryInfo.page
        :page-size=queryInfo.size
        layout="total, prev, pager, next"
        :total=total>
      </el-pagination>
    </div>


    <div class="footer">
        <p>本站所有图片均来自必应搜索</p>
        <p>Copyright © 2022 云淡风轻 Author Ne-21</p>
      </div>
    

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      total:0,
      queryInfo: {
        page:1,
        size:9
      },
      picUrls:[]
    }
  },
  created() {
    this.getList()
  },
  methods:{
    showBig(item) {
      this.$router.push({path:'/photo',query:{imgInfo:encodeURIComponent(JSON.stringify(item))}})
    },
    getList() {
      this.$axios.get("/getList",{params:this.queryInfo})
        .then(({data}) => {
          if (data.status != 1) return
          this.total = data.total
          this.picUrls = data.data
        })
    },
    handleCurrentChange(page) {
      this.queryInfo.page = page
      this.getList()
    },
    download(item) {
      const loading = this.$loading({
          lock: true,
          text: '下载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
      });
      this.$axios.get('/download',{
        params:{
          "copyright": item.copyright,
          "urlBase": item.urlbase
        },
        responseType: 'blob'
      }).then((data)=>{
        let blob = data.data
        let reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onload = (e) => {
          let a = document.createElement('a')
          a.download = item.copyright + "_1920x1080.jpg"
          a.href = e.target.result
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        }
        setTimeout(()=>{
          loading.close()
        },2000)
      })
    }
  }
}
</script>

<style lang="css" scoped>
.home {
  padding: 0;
  padding-top: 5px;
  width: 100%;
}
.el-row {
  margin-left: -12px !important;
  margin-right: 0px !important;
}
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

.opline {
  position: fixed;
  bottom: 10px;
  right: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  padding: 0 20px;
  font-weight: bold;
}

</style>