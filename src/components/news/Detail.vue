<template>
  <div class="news news-detail">
    <div class="main-content clearfix">
      <div class="article fl">
        <h2 class="title">{{currentNews.title}}</h2>
        <div class="content">{{currentNews.content}}</div>
      </div>

      <div class="side-nav fr">
        <v-nav></v-nav>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import '../../assets/css/pages/news.scss';
  import DetailNav from './DetailNav.vue';

  export default{
      data(){
          return{
              currentNews:[],
              newsList:[
                {
                    nid:0,
                    title: 'title1',
                    content: 'article1'
                },
                {
                    nid:1,
                    title: 'title2',
                    content: 'article2'
                },
                {
                    nid:2,
                    title: 'title3',
                    content: 'article3'
                }
              ]
          }
      },
      components:{
          'v-nav': DetailNav
      },
      methods:{
          getNews(id){
            for(var i=0; i<this.newsList.length; i++){
                if(id == this.newsList[i].nid){
                    this.currentNews = this.newsList[i];
                }
            }
          }
      },
      mounted(){
          var nid = this.$route.params.nid;
          console.log('articleId:'+ nid)
          this.getNews(nid);
      }
  }
</script>
