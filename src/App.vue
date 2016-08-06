<template>
  <div class="app">
    <Top></Top>
    <router-view></router-view>
    <div v-if="$route.path!='/'" class="back-button" onclick="window.history.back()">←</div>
    <h2>Copyright © 2016 Unique Studio All rights reserved</h2>
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
}

body {
  display: flex;
  background: url('./assets/backgroud.png') #000 ;
  background-size:100vw;
  height: 100%;
  width: 100vm;
  overflow-x: hidden;
  max-width: 400px;
}

.back-button{
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background-color: #222;
  font-size: 22px;
  line-height: 25px;
  color: #00ffb8;
  filter:alpha(opacity=75);
  -moz-opacity:0.75;
  opacity: 0.75;
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-weight: lighter;
  text-align: center;
  border: #00ffb8 1px solid;
  z-index: 10;
}

</style>
