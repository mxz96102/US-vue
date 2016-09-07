<template>
  <div class="Top">
    <div>
      <a><img v-link="{name:'index'}" class="top-logo" src="../assets/logo.png" /><div class="top-name">联创团队</div></a>
    </div>
    <div class="top-menu">
      <div class="top-menu">
        <svg id="top-menu-logo" height="30px" width="30px" viewBox="0 0 345 345" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <g>
                <rect y="46.06" width="344.339" height="15" fill="#FFFFFF"/>
              </g>
              <g>
                <rect y="156.506" width="344.339" height="15" fill="#FFFFFF"/>
              </g>
              <g>
                <rect y="268.748" width="344.339" height="15" fill="#FFFFFF"/>
              </g>
            </g>
          </g>        </svg>
        <ul class="top-menu-list">
          <li><a v-link="{name:'index'}">首页</a></li>
          <li><a v-link="{name:'intro'}">简介</a></li>
          <li><a v-link="{name:'group',params: { name : 'web' }}">组别</a></li>
          <li><a v-link="{name:'memo'}">大事记</a></li>
          <li><a v-link="{name:'work'}">作品</a></li>
          <li><a v-link="{name:'contact'}">联系我们</a></li>
          <li><a v-link="{name:'join'}">加入我们</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../assets/other/swiper.min';

export default {
  data () {
    return {
    }
  },
  ready(){
    new Swiper('.swiper-container', {
      height: 600,
    });

    var __onclick=()=>{
      var list=document.getElementsByClassName('top-menu-list')[0];
      if(list.style.display!='none'){
        list.style.display='none';
      }else {
        list.style.display='block';
      }
    };

    [document.getElementById('top-menu-logo').onclick,document.getElementsByClassName('top-menu-list')[0].onclick]=[__onclick,__onclick]


  },
  name:'Top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Top{
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  padding: 5px;
  background: #232323;
}
  .top-logo{
    height: 50px;
    float: left;
    margin-left: 10px;
  }
  .top-name{
    line-height: 50px;
    font-size: 18px;
    float: left;
    color: white;
    margin-left: 10px;
  }
  .top-menu{
    float: right;
    margin-right: 10px;
    margin-top: 5px;
  }

  .top-menu svg{
    float: right;
  }

  .top-menu:hover>ul{
    display: block;
  }

/*.top-menu ul:hover{
  display: block;
}*/

  .top-menu ul{
    list-style: none;
    float: right;
    position: absolute;
    top: 50px;
    right: 10px;
    display: none;
    z-index: 5;
  }

  .top-menu li{
    color: white;
    background: #161616;
    width: 100px;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

.top-menu li:nth-child(2n){
  background: #2D2D2D;
}

  .top-menu li:hover{
    background: #00ffb8;
  }

  .top-menu-list>li>a{
    width: 100%;
    height: 100%;
  }
</style>
