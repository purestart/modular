/* eslint-disable */

import Vue from "vue";
import {
  baseStore,
  baseRouter,
  sysRoutes,
  Login,
  Main,
  Home,
  App,
  baseRegComponents,
  baseRouterView,
  baseNoMenuRoutes
} from "base";
import ElementUI from "element-ui";
import NProgress from "nprogress";
import moment from "moment";
Vue.use(ElementUI);
import axios from "axios";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.prototype.axios = axios;
Vue.prototype.$moment = moment;

import VCharts from "v-charts";
Vue.use(VCharts);
Vue.use(baseRegComponents);
baseStore.commit('updateProcessEnv', process.env)

// console.log(window);
console.log("=============");
console.log(process.env)


{{#each(renderObject.plugins)~}}
  {{#if(this.folder !== 'base')~}}
import { {{this.customRegComponents?this.customRegComponents:this.folder}}RegComponents, {{this.customRoutes?this.customRoutes:this.folder}}Routes,{{this.noMenuRoutes?this.noMenuRoutes+',':''}} {{this.folder}}Store, {{this.folder}}RouterView } from "{{this.folder}}";
Vue.use({{this.customRegComponents?this.customRegComponents:this.folder}}RegComponents);
if ({{this.folder}}Store) {
  for (var key in {{this.folder}}Store) {
    // console.log(key);
    baseStore.registerModule(key, {{this.folder}}Store[key]);
  }
}
  {{~/if}}
{{~/each}}


let noMenuRoutes=[];
{{#each(renderObject.plugins)~}}
  {{#if(this.folder !== 'base' && this.noMenuRoutes)~}}
if({{this.noMenuRoutes}}){
  noMenuRoutes=noMenuRoutes.concat({{this.noMenuRoutes}})
}
  {{~/if}}
{{~/each}}

if(baseNoMenuRoutes){
  noMenuRoutes=noMenuRoutes.concat(baseNoMenuRoutes)
}
// console.log(baseStore);
/**
 * Config
 */

Vue.config.debug = process.env.NODE_ENV === "development";
Vue.config.silent = process.env.NODE_ENV === "production";
Vue.config.devtools = true;
Vue.config.productionTip = false;

const setGlobalTopNavs = function(to, next) {
  let matchedLength = to.matched.length;
  let item = to;
  if (matchedLength > 2) {
    item = to.matched[2];
  }
  if (!item.meta.hidden) {
    let newItem = {
      name: item.meta.title,
      path: item.path,
      query: item.query,
      params: item.params
    };
    baseStore.commit("updateNavTabData", newItem);
  }
  next();
};

// console.log(baseRouter);

const routerView = {
  template: "<router-view></router-view>"
};

// baseRouter.options.routes = baseRouter.options.routes.concat(router);

let routes = [
  {
    path: "/login",
    meta: {
      title: "登录"
    },
    component: Login,
    name: "登录"
  },
  {
    path: '/nomenu',
    meta: {
        title: '',
        // hidden: true,
    },
    component: baseRouterView,
    children: noMenuRoutes,
    // children:[],
    name: '',
  },
  {
    path: "/",
    meta: {
      title: "首页"
    },
    component: Main,
    redirect: "home",
    children: [
      // 首页
      {
        path: "home",
        meta: {
          title: "工作台",
          hidden: true
        },
        component: Home,
        name: "主页"
      },
      //基础平台系统路由
      {
        path: "sys",
        meta: {
          title: "系统管理"
        },
        component: baseRouterView,
        name: "系统管理",
        children: sysRoutes
      },
{{#each(renderObject.plugins)~}}
    {{#if(this.folder !== 'base')~}}
      // {{this.name}}路由
      {
        path: "{{this.path}}",
        meta: {
          title: "{{this.title}}"
        },
        component: {{this.folder}}RouterView,
        name: "{{this.name}}",
        children: {{this.customRoutes?this.customRoutes:this.folder}}Routes
      },
    {{~/if}}
{{~/each}}
    ]
  }
];
baseRouter.options.routes = routes;
baseRouter.addRoutes(routes);

baseRouter.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem("token");
  let user = localStorage.getItem("user");
  NProgress.start();
  /*if(from.path=='/login'){
      sessionStorage.removeItem('tagNavList')
  }*/
  if (to.path == "/login") {
    localStorage.clear();
    baseStore.commit("updateLoginToken", null);
    baseStore.commit("updateLoginUser", null);
    baseStore.commit("updateUserMenu", null);
    // store.commit('updateNavTabDataByIndex',[{
    //     path: '/home',
    //     title: '主页',
    // }] )
    next();
  } else {
    if (!baseStore.state.loginToken || !user) {
      if (token && user) {
        baseStore.commit("updateLoginTokenCPM", token);
        baseStore.commit("updateLoginUserCPM", JSON.parse(user));
        setGlobalTopNavs(to, next);
      } else {
        next({
          path: "/login"
        });
      }
    } else {
      setGlobalTopNavs(to, next);
    }
  }
  next();
});
baseRouter.afterEach(transition => {
  NProgress.done();
  // setTimeout(() => {
  //     if (document && document.getElementById('wholeLoadingId') && document.getElementById('wholeLoadingId').style.display != 'none') {
  //         document.getElementById('wholeLoadingId').style.display = 'none'
  //     }
  // }, 20)
});

//  全局组件之间通信
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue();

// 设置浏览器窗口大小
window.onresize = function(e) {
  baseStore.commit("changeWindowSize", {
    innerWidth: e.target.innerWidth,
    innerHeight: e.target.innerHeight
  });
};

new Vue({
  router: baseRouter,
  store: baseStore,
  render: h => h(App)
}).$mount("#app");

/* eslint-disable */