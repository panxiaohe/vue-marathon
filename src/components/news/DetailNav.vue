<template>
  <div class="news-nav">
    <dl v-for="item in navList">
      <dt>
        <router-link :to="{name:'NewsList',params:{nid:item.nid}}">{{item.name}}</router-link>
      </dt>
      <dd v-for="subItem in item.subList">
        <router-link :to="{name:'NewsDetail',params:{nid:subItem.id}}">{{subItem.title}}</router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              navList:[
                {
                  nid:0,
                  name:'新闻',
                  isActive:false,
                  subList:[
                    {id:0, title:'news1'},
                    {id:1, title:'news2'},
                    {id:2, title:'news3'}
                  ]
                },
                {
                  nid:1,
                  name:'公告',
                  isActive:false,
                  subList:[
                    {id:0, title:'post1'},
                    {id:1, title:'post2'},
                    {id:2, title:'post3'}
                  ]
                }

              ]
          }
      }
  }
</script>
