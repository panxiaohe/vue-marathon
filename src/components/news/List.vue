<template>
  <div class="news news-list">
    <div class="main-content clearfix">
      <div class="list-content fl">
        <h2 class="list-title">{{currentNav.text}}列表</h2>
        <ul>
          <li v-for="item in currentNav.subList">
            <router-link :to="{name:'NewsDetail',params:{nid:item.nid}}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>

      <div class="side-nav fr">
        <v-nav></v-nav>
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
            currentNav:[],
            listData:[
              {
                nid:0,
                text:'新闻',
                subList:[
                  {
                    nid:0,
                    title:'新闻1'
                  },
                  {
                    nid:1,
                    title:'新闻2'
                  },
                  {
                    nid:2,
                    title:'新闻3'
                  },
                ]
              },
              {
                nid:1,
                text:'公告',
                subList:[
                  {
                    nid:0,
                    title:'公告1'
                  },
                  {
                    nid:1,
                    title:'公告2'
                  },
                  {
                    nid:2,
                    title:'公告3'
                  },
                ]
              }
            ]
        }
      },

      components:{
          'v-nav': ListNav
      },

      methods:{
        current(navNid){
          var current = null;
          for(var i=0; i<this.listData.length; i++){
            if(navNid == this.listData[i].nid){
              current = this.listData[i];
            }
          }
          this.currentNav = current;
        }
      },

      mounted(){
        var currentId = this.$route.params.nid;
        console.log('navId:' + currentId)
        this.current(currentId);
      }
  }
</script>
