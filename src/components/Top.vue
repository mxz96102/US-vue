<template>
  <div class="Top">
    <div>
      <img class="top-logo" src="../assets/logo.png" /><div class="top-name">联创团队</div>
    </div>
    <div class="top-menu">
      <div class="top-menu">
        <svg id="top-menu-logo" height="30px" width="30px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(0.1953125, 0.1953125)"><path d="M631.947859 597.810365c0 16.205077-13.150508 29.356608-29.356608 29.356608L98.256838 627.166973c-16.205077 0-29.356608-13.150508-29.356608-29.356608L68.90023 93.474928c0-16.205077 13.150508-29.356608 29.356608-29.356608l504.335437 0c16.205077 0 29.356608 13.150508 29.356608 29.356608L631.948883 597.810365zM952.276469 274.220479c0 16.205077-13.150508 29.356608-29.356608 29.356608L742.176356 303.577087c-16.205077 0-29.356608-13.150508-29.356608-29.356608L712.819748 93.474928c0-16.205077 13.150508-29.356608 29.356608-29.356608l180.744527 0c16.205077 0 29.356608 13.150508 29.356608 29.356608L952.277492 274.220479zM952.276469 597.810365c0 16.205077-13.150508 29.356608-29.356608 29.356608L742.176356 627.166973c-16.205077 0-29.356608-13.150508-29.356608-29.356608L712.819748 417.065837c0-16.205077 13.150508-29.356608 29.356608-29.356608l180.744527 0c16.205077 0 29.356608 13.150508 29.356608 29.356608L952.277492 597.810365zM952.276469 931.134962c0 16.205077-13.150508 29.356608-29.356608 29.356608L742.176356 960.491571c-16.205077 0-29.356608-13.150508-29.356608-29.356608L712.819748 750.389412c0-16.205077 13.150508-29.356608 29.356608-29.356608l180.744527 0c16.205077 0 29.356608 13.150508 29.356608 29.356608L952.277492 931.134962zM631.947859 931.134962c0 16.205077-13.150508 29.356608-29.356608 29.356608L421.847747 960.491571c-16.205077 0-29.356608-13.150508-29.356608-29.356608L392.491139 750.389412c0-16.205077 13.150508-29.356608 29.356608-29.356608l180.744527 0c16.205077 0 29.356608 13.150508 29.356608 29.356608L631.948883 931.134962zM308.357973 931.134962c0 16.205077-13.150508 29.356608-29.356608 29.356608L98.256838 960.491571c-16.205077 0-29.356608-13.150508-29.356608-29.356608L68.90023 750.389412c0-16.205077 13.150508-29.356608 29.356608-29.356608l180.744527 0c16.205077 0 29.356608 13.150508 29.356608 29.356608L308.357973 931.134962z" fill="white"></path></g>
        </svg>
        <ul>
          <li><a v-link="{name:'index'}">首页</a></li>
          <li><a v-link="{name:'intro'}">简介</a></li>
          <li><a v-link="{name:'group',params: { name : 'web' }}">组别</a></li>
          <li><a v-link="{name:'memo'}">大事记</a></li>
          <li><a v-link="{name:'work'}">作品</a></li>
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
    })
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
</style>
