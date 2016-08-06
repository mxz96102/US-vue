<template>
    <div class="index">
      <div class="index-welcome">
        <div class="index-welcome-bar"></div>
        <p>Welcome to</p>
        <p>Unique Studio</p>
        <p>Website</p>
      </div>
      <ul class="index-menu">
        <li><a v-link="{name:'intro'}"><div class="index-menu-list">简介</div></a></li>
        <li><a v-link="{name:'group',params: { name : 'web' }}"><div class="index-menu-list">组别</div></a></li>
        <li><a v-link="{name:'memo'}"><div class="index-menu-list">大事记</div></a></li>
        <li><a v-link="{name:'work'}"><div class="index-menu-list">作品</div></a></li>
        <li><a v-link="{name:'contact'}"><div class="index-menu-list">联系我们</div></a></li>
        <li><a v-link="{name:'join'}"><img style="width:200px;margin-left:auto;margin-right:auto;margin-top:20px" src="../assets/join.png" /> </a></li>
      </ul>
    </div>
</template>
<style>
  .index{
  }

  .index-welcome-bar{
    background-color: #00ffb8;
    height: 5px;
    width: 40px;
  }

  .index-welcome{
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-size: 40px;
    width: 300px;
    margin-top: 25px;
  }

  .index-menu {
    width: 200px;
    list-style: none;
    text-align: center;
    margin: 20px auto 0 auto;
  }

  .index-menu-list {
    margin-top: 20px;
    position: relative;
    font-size: 18px;
    width: 100%;
    line-height: 2.0;
    -webkit-appearance: none;
    border-radius: 5px;
    border: none;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, #00ffb8 0%, #4ec4ce 100%), linear-gradient(to right, #00ffb8 0%, #4ec4ce 100%);
    border-left: 2px solid #00ffb8;
    border-right: 2px solid #4ec4ce;
    background-position: 0 0, 0 100%;
    background-size: 100% 2px;
    background-color: transparent;
    color: white;
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
