
import Login from './Components/Login.vue';
import Header from './Components/Header.vue';
import Home from './Components/Home.vue';
import Reset from './Components/Reset.vue';
import Resets from './Components/ResetPassword.vue';
import Create from './Components/Create.vue';
export const routes = [
    {
      path: '/login',
      component: Login
    },
  
    {
    path: '*',
    redirect: '/',
    },
    {
      path: '/resetpassword',
      components: {
        default: Reset,
        nav: Header
      }
    },
    {
      path: '/resetpassword2/:id',
      components: {
        default: Resets,
        nav: Header
      }
    },
    {
      path: '/home',
      components: {
        default: Home,
        nav: Header
      }
    },
    {
      path: '/create',
      components: {
        default: Create,
      }
    },
    
  ];