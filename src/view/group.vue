<template>
  <div class="group swiper-container">
    <div class="swiper-pagination"></div>
    <div class="swiper-wrapper">
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/web.png"/>
        </div>
        <br />
        <h1>Web</h1>
        <p>Web组以通过互联网丰富生活为主要目的，时刻与最新的趋势保持同步。浏览器是我们的世界，在这里我们可以尽情地毁灭和创造。</p><p>主要方向：网站开发、Web App开发、浏览器插件开发、微信公众平台开发。</p>
      </div>
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/lab.png"/>
          </div>
        <br />
        <h1>Lab</h1>
        <p>Lab组是Geek们的聚集地。我们探索各领域的算法，捣鼓智能硬件和系统级开发，有时焊焊芯片，服务器运维是我们的拿手好戏。</p><p>我们致力于编写高性能的代码，热衷于处理海量的数据。</p>
      </div>
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/design.png"/>
          </div>
        <br />
        <h1>Design</h1>
        <p>Design组主要进行各个平台软件、网页及WebApp的界面和交互设计，也会进行游戏设计和视频制作。</p><p>我们并非美工而是设计师，在这里你可以做任何发挥艺术天赋，并借由技术和互联网闪耀光芒的设计。</p>
      </div>
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/pm.png"/>
          </div>
        <br />
        <h1>PM</h1>
        <p>PM组是用户与开发技术人员之间沟通的桥梁，它以开发出能够满足用户需求的高质量的应用服务为目标；</p><p>在产品的开发过程中致力于对产品功能、UI等方面的诠释，将创新的想法与前沿的技术结合起来并应用到实践中。</p>
      </div>
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/android.png"/>
          </div>
        <br />
        <h1>Android</h1>
        <p>Android组是基于Android系统以实现创意、探索技术为目的的小组.无论是在本地化功能型应用方向，还是基于大数据的客户端，都保持领先的技术水平和辉煌的战果。</p><p>主要方向：手机游戏开发、功能型App开发、移动互联网应用及插件开发。</p>
      </div>
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/ios.png"/>
          </div>
        <br />
        <h1>iOS</h1>
        <p>我们基于iOS系统展现创意和技术。无论是小而美的创意类应用，还是大型的客户端构建都是我们涉足的领域。</p><p>在这里，你能优雅地通过技术为平凡生活增添光彩，得到自我提升。Stay Hungry, Stay Foolish.不断进步，锐意创新。</p>
      </div>
      <div class="group-info swiper-slide">
        <div class="group-img">
        <img src="../assets/group/game.png"/>
          </div>
        <br />
        <h1>Game</h1>
        <p>Game组热衷于设计并创造游戏，探索并研究底层技术。我们在图形学和游戏人工智能等领域施展拳脚，致力于游戏开发的每个阶段。</p><p>引擎是我们创造世界的工具，策划是我们描绘世界的蓝图。在这里，你能尽情制造快乐，收获快乐，享受快乐。</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  ready(){
    var nameMap={
      'web':0,
      'lab':1,
      'design':2,
      'pm':3,
      'android':4,
      'ios':5,
      'game':6
    };

    var num=location.hash.split('/')[2];
    num=nameMap[num];
    num=parseInt(num);
    var numMap={
      0:'web',
      1:'lab',
      2:'design',
      3:'pm',
      4:'android',
      5:'ios',
      6:'game'
    };
    new Swiper('.swiper-container', {
      height: 600,
      pagination : '.swiper-pagination',
      initialSlide :num,
      onTransitionEnd: function(swiper){
        window.location='#!/group/'+numMap[swiper.activeIndex];
        window.document.title='Unique Studio -'+numMap[swiper.activeIndex]+'组';
      }
    })
  },
  name:'group'
}
</script>

<style scoped>

  .swiper-container{
    width: 90vw;
    margin: 0 auto;
  }

  .group{
    width: 100vw !important;
    margin-top: 20px;
  }

  .group-img{
    height: 260px;
  }

  .group-info{
    width: 100vw;
    display: list-item;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }

  .group-info img{
    width: 90vw;
    max-width: 400px;
    height: auto;
    margin-right: auto;
    margin-left: 5vw;
  }

  .group-info h1{
    color: #00ffb8;
    font-weight: lighter;
    height: 30px;
    margin-left: 5vw;
    text-align: left;
    margin-bottom: 5px;
    font-size: 15px;
  }

  .group-info p{
    width: 300px;
    color: white;
    margin: 0 auto;
    text-align: left;
    text-indent: 1em;
    font-size: 12px;
  }


</style>
