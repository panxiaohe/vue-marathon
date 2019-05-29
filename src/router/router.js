/**
 * Created by panxiaohe on 2019/3/29.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home.vue';
import Index from '../components/Index.vue';

import NewsList from '../components/news/List.vue';
import NewsDetail from '../components/news/Detail.vue';
import Pages from '../components/news/Pages.vue';

import Login from '../components/login/Login.vue';
import Register from '../components/login/Register.vue';

const routes = [
  {
    path:'/',
    component:Home,
    children:[
      {name:'Index',path:'',component:Index},
      {name:'NewsList',path:'newsList/:nid',component:NewsList},
      {name:'NewsDetail',path:'newsDetail/:nid',component:NewsDetail},
      {name:'Pages',path:'pages',component:Pages},
      {name:'Login',path:'login',component:Login},
      {name:'Register',path:'register',component:Register},

    ]
  },

  {path:'*',redirect:'/'}
];

const router = new VueRouter({
  routes
});

export default router;
