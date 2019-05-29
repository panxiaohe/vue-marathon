<template>
  <div class="news pages">
    <div class="main-content clearfix">
      <div class="article fl">
        <h2 class="title">title</h2>
        <div class="content">content</div>
      </div>

      <div class="side-nav fr">
        <!--<v-nav></v-nav>-->
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/pages/news.scss';
  import ListNav from './ListNav.vue';

  export default{
      data(){
          return{

          }
      },
      components:{
        'v-nav': ListNav
      },
  }
</script>
