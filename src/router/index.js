import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index/Home'
import About from '../components/index/About'
import Api from '../components/index/Api'
import Index from '../components/index/Index'
import Photo from '../components/index/Photo'
import Admin from '../components/admin/Admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path:'/index',
    name: 'Index',
    component: Index,
    children: [
      {path: '/',name:'Home',component:Home},
      {path: '/about',name: 'About',component: About},
      {path: '/api',name: 'Api',component: Api},
      {path: '/photo',name: 'photo',component: Photo}
    ]
  },
  {
    path:'/admin',
    name: 'Admin',
    component: Admin,
    children: [
    ]
  },
]

const router = new VueRouter({
  routes
})

router.afterEach(( to, from, next ) => {
  setTimeout(()=>{
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?8b9d7cc0a562e7737bb82afc466c30e6";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  },0);
});

export default router
