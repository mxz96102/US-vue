<template>
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
      </div>
    </div>
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
          <img src="../assets/work/more/6.jpg" class="work-more-img"/>
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
      </div>
    </div>
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
      width:330,
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: 15
    }),sw_2=new Swiper('.work-more', {
      width:300,
      centeredSlides: true,
      spaceBetween: 5
    });
    sw_2.params.control=sw_1;
    sw_1.params.control=sw_2;

  },
  name:'work'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    text-align: center;
    color: white;
    font-weight: lighter;
    margin-top: 50px;
  }
  .work-icon{
    width: 100vw;
  }
  .work-more{
    width: 100vm;
  }
  .work-more-img{
    width: 300px;
    height: auto;
  }
</style>
