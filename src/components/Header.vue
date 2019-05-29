<template>
  <div class="header">
    <div class="main-content clearfix">
      <div class="logo">
        <h1><router-link :to="{name:'Index'}"><img src="" alt=""></router-link></h1>
      </div>

      <div class="nav">
        <ul class="clearfix">
          <li>
            <router-link :to="{name:'Index'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name:'NewsList',params:{nid:0}}">新闻公告</router-link>
          </li>
          <li>
            <router-link :to="{name:'Pages'}">参赛指南</router-link>
          </li>

        </ul>
      </div>

      <div class="user">
        <router-link to="" class="language">English</router-link>
        <span class="divide-line"></span>

        <div v-if="isLogin" class="user-info">
          <router-link to="">user</router-link>
          <router-link to="">个人中心</router-link>
        </div>
        <div v-else class="user-info">
          <router-link :to="{name:'Login'}" class="btn btn-login">登录</router-link>
          <router-link :to="{name:'Register'}" class="btn btn-register">注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default{
      data(){
          return{
            isLogin: false

          }
      }
  }
</script>
