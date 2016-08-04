<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
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

  a{
    text-decoration: none;
    color: white;
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
}



</style>
