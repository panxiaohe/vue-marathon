<template>
  <div class="news-nav">
    <dl>
      <dt v-for="item in navList">
        <router-link :to="{name:'NewsList', params:{nid:item.nid}}" :class="{current:item.isActive}">{{item.text}}</router-link>
      </dt>
    </dl>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              currentId:'',
              navList:[
                {nid:0, text:'新闻', isActive:false},
                {nid:1, text:'公告', isActive:false}
              ]
          }
      },
//      computed:{
//          newList(){
////              var current = this.currentId;
//              var current = this.$parent.navNid;
//              var newList = this.navList.map(function (value) {
//                if(current == value.nid){
//                  value.isActive = true;
//                }
//                return value;
//              });
//              return newList;
//          }
//      },

//      mounted(){
//        var current = this.$parent.navNid;
//        if(current){
//            this.currentId = current;
//        }
//      }
  }
</script>
