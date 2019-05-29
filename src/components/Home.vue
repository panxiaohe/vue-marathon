<template>
    <div class="marathon">
      <v-header></v-header>

      <router-view></router-view>

      <v-footer></v-footer>
    </div>
</template>

<script>
  import '../assets/css/global.scss';

  import Header from './Header.vue';
  import Footer from './Footer.vue';

  export default{
      data(){
          return{

          }
      },
      components:{
          'v-header':Header,
          'v-footer':Footer
      }
  }
</script>
