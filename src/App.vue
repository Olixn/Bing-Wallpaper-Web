<template>
  <div id="app">
    <el-container>
      <el-header>
        <div>
          <img src="./assets/logo.svg" alt="" />
          <span>Bing每日壁纸</span>
        </div>
        <div>
          <el-menu :default-active="'.' + $route.path" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item index="./">首页</el-menu-item>
            <el-menu-item index="./api">API</el-menu-item>
            <el-menu-item index="./about">关于</el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
    
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
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

.el-footer {
  position:absolute;
  bottom: 0;
  background-color: rgb(60, 216, 236);
}
</style>
