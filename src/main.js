import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import CoreuiVue from '@coreui/vue'
import {routes}  from './routes' //路由規則q

// Vue.use(VueCharts);
//... configure axios...
Vue.prototype.$http = window.axios;
Vue.use(CoreuiVue)


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  
  router,
  
  render: h => h(App)
});

router.beforeEach((to, from, next)=>{
  const isLogin = window.sessionStorage.getItem('token') ;
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/login')
      router.push({ path: 'home' });
    else
      router.push({ path: 'logout' });
  }
});


