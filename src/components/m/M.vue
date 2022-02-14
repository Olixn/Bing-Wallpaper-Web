<template>
    <el-container>
      <el-header :style="$route.path == '/photo' ? 'display:none;': ''">
        <div @click="goHome()">
          <img src="../../assets/logo.svg" alt="" />
          <span>每日壁纸</span>
        </div>
        <!-- <div>
          <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/api">API</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
            <el-menu-item @click="goGithub()"><img src="../../assets/GitHub.svg" alt="" style="width:20px; "></el-menu-item>
          </el-menu>
        </div> -->
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    goHome(){
      this.$router.push({path:'/index'})
    },
    goGithub() {
      window.open("https://github.com/Olixn/Bing-Wallpaper-Web","_self")
    }
  }
    
}
</script>
<style>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid #eaf0f5;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-header div span {
  margin-left: 15px;
}
.el-header div img {
  height: 40px;
}

.el-main {
  padding: 0px !important;
}
</style>
