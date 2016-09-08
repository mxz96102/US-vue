<template>
  <div class="app">
    <Top></Top>
    <router-view></router-view>
    <div v-if="$route.path!='/'" class="back-button" ><a v-link="{name:'index'}"><svg version="1.1" class="back-button" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#7A8783;stroke:#00FFB8;stroke-miterlimit:10;}
  .st1{fill:none;stroke:#00FFB8;stroke-miterlimit:10;}
</style>
<circle id="XMLID_1_" class="st0" cx="12.5" cy="12.5" r="11"/>
<polyline id="XMLID_12_" class="st1" points="8.5,12.6 15.5,6.7 8.5,12.6 15.5,18.4 "/>
</svg></a></div>
    <h2 class='footer'>Copyright © 2016 Unique Studio All rights reserved</h2>
  </div>
</template>

<script>
  import Top from './components/Top'

export default {
  components: {
   Top
  }
}
</script>

<style>
  @import "./assets/other/swiper.min.css";

  *{
    font-family: "Hiragino Sans GB", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
    border: none;
    margin: 0;
    padding: 0;
    list-style: none;
    max-width: 400px;
  }

  h2{
    text-align: center;
    font-size: 12px;
    font-weight: lighter;
    margin-top: 10px;
    color: white;
  }

  a{
    text-decoration: none;
    color: white;
  }

  .app{
    margin-bottom: 20px;
  }

html {
  width: 100%;
  overflow-x: hidden;
  max-width: 400px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

body {
  background: url('./assets/backgroud.png') #000 ;
  background-size:100vw;
  height: 100%;
  width: 100vm;
  overflow-x: hidden;
  max-width: 400px;
}

.back-button{
  width:40px;
  height: 40px;
  filter:alpha(opacity=75);
  -moz-opacity:0.75;
  opacity: 0.75;
  position: fixed;
  bottom: 20px;
  left: 20px;
  text-align: center;
  z-index: 10;
}

  .footer{
    margin: 20px 0 0 0;
  }

  .swiper-pagination{
    margin-bottom: -10px!important;
    overflow: visible;
  }

  .swiper-pagination-bullet{
    width: 15px;
    height: 15px;
    background-color: gray;
    z-index: 2;
    position: relative;
  }
 .swiper-pagination-bullet-active{
   background-color: #00ffb8;
 }
  .swiper-pagination:after{
    width: 100%;
    margin-top: -10px;
    border-top: rgba(12,12,12,0.6) 2px solid;
    position: relative;
    z-index: 0;
    content: '';
    display: block;
    background: transparent;
    height: 0;
  }

</style>
