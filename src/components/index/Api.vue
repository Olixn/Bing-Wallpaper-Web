<template>
  <div class="container">
        <div class="content">
            <div class="markdown-body">
                <Docu />
            </div>
        </div>
    </div>
</template>

<script>
import Docu from './docu.md'
import 'highlight.js/styles/github.css'
// 其他元素使用 github 的样式
import 'github-markdown-css'
export default {
    components: {
        Docu
    }
}
</script>


<style lang="css" scoped>
.container {
  text-align: left !important;
  height: 100%;
  background: #f1f1f1; 
}

.container .content {
  min-width: 800px;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 50px;
  background: #fff;
}
</style>