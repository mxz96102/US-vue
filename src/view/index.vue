<template>
    <div class="index">
      <div class="index-welcome">
        <div class="index-welcome-bar"></div>
        <p>Welcome to</p>
        <p>Unique Studio</p>
      </div>
      <ul class="index-menu">
        <li><a v-link="{name:'intro'}"><div class="index-menu-list">简介</div></a></li>
        <li><a v-link="{name:'group',params: { name : 'web' }}"><div class="index-menu-list">组别</div></a></li>
        <li><a v-link="{name:'memo'}"><div class="index-menu-list">大事记</div></a></li>
        <li><a v-link="{name:'work'}"><div class="index-menu-list">作品</div></a></li>
        <li><a v-link="{name:'contact'}"><div class="index-menu-list">联系我们</div></a></li>
        <li><a v-link="{name:'join'}"><div class="index-menu-list index-join">加入我们</div></a></li>
      </ul>
    </div>
</template>
<style>
  .index{
  }

  .index-welcome-bar{
    background-color: #00ffb8;
    height: 4px;
    width: 20px;
    margin-bottom: 10px;
  }

  .index-welcome{
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-size: 20px;
    width: 300px;
    margin-top: 25px;
  }

  .index-menu {
    width: 250px;
    list-style: none;
    text-align: center;
    margin: 50px auto 0 auto;
    background: url("../assets/index/cloud.png") center no-repeat;
    height: 320px;
  }

  .index-menu-list {
    position: relative;
    font-size: 12px;
    width: 160px;
    line-height: 2.5;
    -webkit-appearance: none;
    border-radius: 30px;
    border: 1px solid gray;
    color: white;
    transition: all 0.3s ease-out;
    margin: 20px auto 0 auto;;
  }

  .index-menu-list:hover{
    background: rgba(202, 202, 202, 0.2);
  }

  .index-join{
    background-image: linear-gradient(to right, #01a5fa 0%, #4ec4ce 100%), linear-gradient(to right, #01a5fa 0%, #4ec4ce 100%);
  }



</style>
<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
