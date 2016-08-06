import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import index from './view/index'
import App from './App'
import Intro from './view/Intro'
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
    component:index
  },
  '/intro':{
    name:'intro',
    component:Intro
  },
  '/group/:name':{
    name:'group',
    component:group
  },
  '/memo':{
    name:'memo',
    component:memo
  },
  '/work':{
    name:'work',
    component:work
  },
  '/join':{
    name:'join',
    component:join
  },
  '/contact':{
    name:'contact',
    component:contact
  },
  '/*':{
    component:index
  }
});

router.start(App,'#app');


