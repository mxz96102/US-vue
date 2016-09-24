<template>
  <!--<h1 style="color:#00ffb8;margin-top:20px">团队作品</h1>-->
  <div class="work">
    <div class="work-icon">
      <div class="swiper-wrapper">
        <img src="../assets/work/icon/1.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/2.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/3.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/4.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/5.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/6.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/7.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/8.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/9.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/10.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/11.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/12.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/13.png" class="swiper-slide work-icon-img"/>
        <img src="../assets/work/icon/14.png" class="swiper-slide work-icon-img"/>
      </div>
    </div>
    <div class="con-line"></div>
    <div class="work-more">
      <div class="swiper-wrapper">
        <div class="swiper-slide ">

          <h1>简寻</h1>
          <img src="../assets/work/more/1.jpg" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>EACO</h1>
          <img src="../assets/work/more/2.jpg" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>有书</h1>
          <img src="../assets/work/more/3.jpg" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>微信公众平台助手</h1>
          <img src="../assets/work/more/4.png" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>咩咩</h1>
          <img src="../assets/work/more/5.jpg" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>Fuubo</h1>
          <img src="../assets/work/more/6.jpg" class="work-more-img work-more-img-sp"/>
        </div>
        <div class="swiper-slide ">

          <h1>Gamee</h1>
          <img src="../assets/work/more/7.jpg" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>Touch Color</h1>
          <img src="../assets/work/more/8.png" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>Over Hust</h1>
          <img src="../assets/work/more/9.png" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>口袋书目</h1>
          <img src="../assets/work/more/10.png" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>上天</h1>
          <img src="../assets/work/more/11.png" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>一方</h1>
          <img src="../assets/work/more/12.jpg" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">

          <h1>壹日壹记</h1>
          <img src="../assets/work/more/13.png" class="work-more-img"/>
        </div>
        <div class="swiper-slide ">
          <h1>PIC Read</h1>
          <img src="../assets/work/more/14.jpg" class="work-more-img"/>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from '../assets/other/swiper.min';

  export default {
  data () {
    return {    }
  },
  ready(){

    var sw_1=new Swiper('.work-icon', {
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 15
    }),sw_2=new Swiper('.work-more', {
      centeredSlides: true,
      spaceBetween: 5,
      pagination: '.swiper-pagination',
    });
    sw_2.params.control=sw_1;
    sw_1.params.control=sw_2;

  },
  name:'work'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .work{
    margin-bottom: 90px;
    margin-top: 20px;
  }
  h1{
    text-align: center;
    color: white;
    font-weight: lighter;
    margin: 10px 0;
    font-size: 20px;
  }
  .work-more-img{
    width: 100%;
    height: auto;
  }
  .con-line{
    margin: 5px auto 10px auto;
    height: 20px;
    width: 2px;
    background: #00ffb8;
  }
  .swiper-pagination{
    width:100%;
    margin:30px auto;
  }
  .work-more.swiper-slide{
    height: 280px;
    overflow: hidden;
  }
</style>
