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
  '/*':{
    component:index
  }
});

router.start(App,'#app');

