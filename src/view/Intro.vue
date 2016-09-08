<template>
  <h1>简介</h1>
  <div class="Intro swiper-container">
    <div class="swiper-wrapper">
      <div class="intro-contianer swiper-slide">
        <div class="intro-img">
          <img src="../assets/intro/1.jpg"/>
        </div>
        <br/>
        <div class="intro-text">
          <p>联创团队（Unique Studio）创建于2000年6月。</p><p>团队秉承不断创新的核心精神，怀揣对技术的无限热忱，努力打造一个以技术为驱动，多元发展的精英学生组织。</p><p>团队立足信息技术，通过承担科研项目，参加科技大赛，</p><p>孕育创新产品等形式激发队员的无限激情和潜能，并积极整合历届队员的优势和资源，共同创造团队和个人的未来。</p>
        </div>
      </div>
      <div class="intro-contianer swiper-slide">
        <div class="intro-img">
          <img src="../assets/intro/2.jpg"/>
        </div>
        <br/>
        <div class="intro-text">
          <p>作为一个以兴趣为主导、强调主动实践和自主创新，由学生自发组织、自我管理的学生团队。</p><p>
          团队致力于为有潜力、肯努力、富有激情的学生构建一流的学习环境，引导他们快速成长。</p><p>目前团队已经取得了优异的成绩成为华中科技大学大学生主动实践获得成功的典范之一。</p><p>团队积极参加国际高水平的科技创新大赛，尤其是在微软创新杯(Imagine
          Cup)全球学生大赛中， 连续5年闯进总决赛并代表中国大学生在世界大学生科技竞赛的舞台上崭露头角。</p>
        </div>
      </div>
      <div class="intro-contianer swiper-slide">
        <div class="intro-img">
          <img src="../assets/intro/3.jpg"/>
        </div>
        <br/>
        <div class="intro-text">
          <p>近年来，团队大力推广校园极客文化，努力把创新活动与IT产业相结合。</p><p>团队连续三年举办了Unique Hack Day校园黑客马拉松大赛，通过Unique Hack
          Day，连接起了当今最有想法的年轻人，</p><p>努力让极客文化传播得更广。与此同时，团队成员在校期间努力创新，推出了众多产品。</p><p>离校后，团队成员积极投身创业浪潮，成功孵化出了百纳信息技术有限公司等企业。联创团队着力打造新的联创平台，为把更多更好的学生带向自主创新之路而不懈努力。</p>
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
      return {}
    },

    ready(){
      new Swiper('.swiper-container', {
        height: 900,
        pagination : '.swiper-pagination',
        width:300
      })
    },
    name: 'Intro'
  }
</script>

<style scoped>
  h1{
    text-align: center;
    color: #00ffb8;
    font-weight: lighter;
    margin-top: 20px;
    font-size: 20px;
  }


  .Intro {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    height: 80vh;
  }

  .intro-container {
    margin-top: 40px;
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  .intro-img img {
    width: 300px;
    height: auto;
  }

  .intro-text {
    color: white;
    width: 300px;
    font-size:15px;
    text-indent: 2em;
    margin-bottom: 20px;
  }
  .intro-contianer,.intro-text{
    overflow: scroll !important;
  }

  .swiper-pagination-bullet{
    margin: 0 30px 0 30px !important;
  }


</style>
