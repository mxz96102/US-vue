<template>
  <h1>联创大事记</h1>
  <div class="memo swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/memo/1.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/2.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/3.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/4.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/6.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/7.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/8.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/9.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/10.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/11.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/12.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/13.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/14.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/15.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/16.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/17.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/18.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/19.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/20.jpg" /></div>
      <div class="swiper-slide"><img src="../assets/memo/21.jpg" /></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>

</template>

<script>
export default {
  data () {
    return {
    }
  },
  ready(){
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 1,
      centeredSlides: true,
      paginationClickable: true,
      preloadImages:false,
      effect : 'cube',
      cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
      }
    })
  },
  name:'memo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    text-align: center;
    color: #00ffb8;
    font-weight: lighter;
    margin-top: 50px;
    font-size: 20px;
  }
  .memo{
    width: 100vw;
    margin-top: 50px;
  }
  .memo img{
    width:100vw;
    height: auto;
  }
</style>
