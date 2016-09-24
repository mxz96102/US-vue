<template>
  <!--<h1>联创大事记</h1>-->
  <div class="memo swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/memo/22.jpg" /><div class="dec-line"></div><h2>2016</h2><h3>2016世界大学生超级计算机竞赛全球第一名</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/21.jpg" /><div class="dec-line"></div><h2>2015</h2><h3>第二届 #阿里巴巴安全技术大赛# 冠军（团队成员） </h3></div>
      <div class="swiper-slide"><img src="../assets/memo/20.jpg" /><div class="dec-line"></div><h2>2015</h2><h3>联创团队十五周年，举办第三届Unique Hack Day(校园黑客马拉松）大赛 吸引全国150余名参赛者，规模空前。 </h3></div>
      <div class="swiper-slide"><img src="../assets/memo/19.jpg" /><div class="dec-line"></div><h2>2014</h2><h3>360全国大学生信息安全大赛团队总分全国第三名。</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/18.jpg" /><div class="dec-line"></div><h2>2014</h2><h3>举办第二届Unique Hack Day（校园黑客马拉松）大赛， 超过150位来自全国各地的高校大学生参赛</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/17.jpg" /><div class="dec-line"></div><h2>2014</h2><h3>第一届全国高校软件定义网络（SDN）应用创新开发大赛三等奖&最佳潜力奖</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/16.jpg" /><div class="dec-line"></div><h2>2013</h2></div>
      <div class="swiper-slide"><img src="../assets/memo/15.jpg" /><div class="dec-line"></div><h2>2012</h2><h3>手机防盗软件“Within”在Google第三届 Android挑战赛中获得全国二等奖</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/14.jpg" /><div class="dec-line"></div><h2>2012</h2><h3>腾讯html5创新大赛全国冠军 </h3></div>
      <div class="swiper-slide"><img src="../assets/memo/13.jpg" /><div class="dec-line"></div><h2>2011</h2><h3>软件设计项目中国赛区第一  </h3></div>
      <div class="swiper-slide"><img src="../assets/memo/12.jpg" /><div class="dec-line"></div><h2>2010</h2><h3>美国纽约微软创新杯IT组全球第六名  </h3></div>
      <div class="swiper-slide"><img src="../assets/memo/11.jpg" /><div class="dec-line"></div><h2>2010</h2><h3>波兰华沙，微软创新杯2010，在Challenge项目获得中获得全球冠军。</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/10.jpg" /><div class="dec-line"></div><h2>2009</h2><h3>软件项目无限潜力开发设计</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/9.jpg" /><div class="dec-line"></div><h2>2009</h2><h3>埃及开罗微软创新杯2009IT挑战项目全球第二名</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/8.jpg" /><div class="dec-line"></div><h2>2008</h2><h3>软件设计组全球第六名</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/7.jpg" /><div class="dec-line"></div><h2>2008</h2><h3>法国巴黎微软创新杯IT组全球第三名 </h3></div>
      <div class="swiper-slide"><img src="../assets/memo/6.jpg" /><div class="dec-line"></div><h2>2007</h2><h3>微软创新杯2007软件设计项目中国赛区第一，比尔盖茨亲自颁奖</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/4.jpg" /><div class="dec-line"></div><h2>2006</h2><h3>微软创新杯visual game全球第五名</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/3.jpg" /><div class="dec-line"></div><h2>2005</h2><h3>微软创新杯office designer第三名</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/2.jpg" /><div class="dec-line"></div><h2>2004</h2><h3>趋势科技全国百万程序大赛团体第四名</h3></div>
      <div class="swiper-slide"><img src="../assets/memo/1.jpg" /><div class="la-dec-line"></div><h2>2000</h2><h3>华中科技大学机械学院98级的13名学生创立了联创工作室</h3></div>
    </div>
    <!--<div class="swiper-pagination"></div>-->
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
      /*pagination: '.swiper-pagination',*/
      centeredSlides: true,
      paginationClickable: true,
      preloadImages:false,
      /*effect : 'cube',
      cube: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 100,
        shadowScale: 0.6
      }*/
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

  h2,h3{
    color:white;
    text-align: center;
  }

  h2{
    font-size:28px;
  }

  h3{
    width: 250px;
    font-size: 16px;
    margin: 0 auto;
    font-weight: lighter;
  }
  .memo{
    width: 100vw;
    margin-top: 50px;
  }
  .memo img{
    width:100vw;
    height: 260px;
  }
  .dec-line,.la-dec-line{
    height: 16px;
    width: 16px;
    border-radius: 16px;
    border: 1px solid #00ffb8;
    margin: 0 auto;
    background: black;
    margin-top: 20px;
  }

  .dec-line:after{
    width: 6px;
    height: 6px;
    background: #00ffb8;
    border-radius: 15px;
    line-height:15px;
    margin: -3px auto 0 auto;
    display: block;
    content: '';
  }

  .la-dec-line:after{
    margin:5px auto;
    width: 6px;
    height: 6px;
    background: #00ffb8;
    border-radius: 15px;
    line-height:15px;
    content: '';
    display: block;
  }

  .dec-line:before{
    width: 100vw;
    height: 0;
    content: '';
    display: block;
    margin-top: 7px;
    border-top: dashed 1px #00ffb8;
  }
</style>
