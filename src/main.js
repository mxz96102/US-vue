import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import index from './view/index'
import intro from './view/Intro'
import group from './view/group'
import memo from './view/memo'
import work from './view/work'
import join from './view/join'
import contact from './view/contact'

console.log('%c联创团队Web组等待你的加入！','background: #fe921f; color: #ffffff; display: inline-block; font-size: 12px; font-weight: bold; line-height: 12px; letter-spacing: 1px; margin: 0 0 30px; padding: 10px 15px 8px; text-transform: uppercase;');

Vue.use(VueResource);

Vue.use(VueRouter);

var router=new VueRouter();

router.map({
  '/':{
    name:'index',
    component:index,
    title:'Unique Studio '
  },
  '/intro':{
    name:'intro',
    component:intro,
    title:'Unique Studio - 简介'
  },
  '/group/:name':{
    name:'group',
    component:group,
    title:'Unique Studio - 组别'
  },
  '/memo':{
    name:'memo',
    component:memo,
    title:'Unique Studio - 大事记'
  },
  '/work':{
    name:'work',
    component:work,
    title:'Unique Studio - 作品'
  },
  '/join':{
    name:'join',
    component:join,
    title:'Unique Studio - 加入我们'
  },
  '/contact':{
    name:'contact',
    component:contact,
    title:'Unique Studio - 联系我们'
  },
  '/*':{
    component:index
  }
});

router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});

router.start(App,'#app');


