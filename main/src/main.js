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

console.log(window);
console.log("=============");
console.log(process.env)



import { ctmRegComponents, ctmRoutes, ctmStore, ctmRouterView } from "ctm";
Vue.use(ctmRegComponents);
if (ctmStore) {
  for (var key in ctmStore) {
    // console.log(key);
    baseStore.registerModule(key, ctmStore[key]);
  }
}
  
import { camRegComponents, camRoutes, camStore, camRouterView } from "cam";
Vue.use(camRegComponents);
if (camStore) {
  for (var key in camStore) {
    // console.log(key);
    baseStore.registerModule(key, camStore[key]);
  }
}
  
import { ccmRegComponents, ccmRoutes, ccmStore, ccmRouterView } from "ccm";
Vue.use(ccmRegComponents);
if (ccmStore) {
  for (var key in ccmStore) {
    // console.log(key);
    baseStore.registerModule(key, ccmStore[key]);
  }
}
  
import { cimRegComponents, cimRoutes, cimStore, cimRouterView } from "cim";
Vue.use(cimRegComponents);
if (cimStore) {
  for (var key in cimStore) {
    // console.log(key);
    baseStore.registerModule(key, cimStore[key]);
  }
}
  
import { crmRegComponents, crmRoutes, crmStore, crmRouterView } from "crm";
Vue.use(crmRegComponents);
if (crmStore) {
  for (var key in crmStore) {
    // console.log(key);
    baseStore.registerModule(key, crmStore[key]);
  }
}
  
import { cmmRegComponents, cmmRoutes, cmmStore, cmmRouterView } from "cmm";
Vue.use(cmmRegComponents);
if (cmmStore) {
  for (var key in cmmStore) {
    // console.log(key);
    baseStore.registerModule(key, cmmStore[key]);
  }
}
  
import { csmRegComponents, csmRoutes, csmStore, csmRouterView } from "csm";
Vue.use(csmRegComponents);
if (csmStore) {
  for (var key in csmStore) {
    // console.log(key);
    baseStore.registerModule(key, csmStore[key]);
  }
}
  
import { cwfRegComponents, cwfRoutes, cwfStore, cwfRouterView } from "cwf";
Vue.use(cwfRegComponents);
if (cwfStore) {
  for (var key in cwfStore) {
    // console.log(key);
    baseStore.registerModule(key, cwfStore[key]);
  }
}
  
import { rptRegComponents, rptRoutes, rptStore, rptRouterView } from "rpt";
Vue.use(rptRegComponents);
if (rptStore) {
  for (var key in rptStore) {
    // console.log(key);
    baseStore.registerModule(key, rptStore[key]);
  }
}
  


let noMenuRoutes=[];


if(baseNoMenuRoutes){
  noMenuRoutes=noMenuRoutes.concat(baseNoMenuRoutes)
}
console.log(baseStore);
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

console.log(baseRouter);

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

      // 票务系统路由
      {
        path: "ticket",
        meta: {
          title: "票务系统"
        },
        component: ctmRouterView,
        name: "票务系统",
        children: ctmRoutes
      },
    
      // 经营决策系统路由
      {
        path: "analysis",
        meta: {
          title: "经营决策系统"
        },
        component: camRouterView,
        name: "经营决策系统",
        children: camRoutes
      },
    
      // 票券系统路由
      {
        path: "coupon",
        meta: {
          title: "票券系统"
        },
        component: ccmRouterView,
        name: "票券系统",
        children: ccmRoutes
      },
    
      // 卖品系统路由
      {
        path: "retail",
        meta: {
          title: "卖品系统"
        },
        component: cimRouterView,
        name: "卖品系统",
        children: cimRoutes
      },
    
      // 会员系统路由
      {
        path: "member",
        meta: {
          title: "会员系统"
        },
        component: crmRouterView,
        name: "会员系统",
        children: crmRoutes
      },
    
      // 营销系统路由
      {
        path: "marketing",
        meta: {
          title: "营销系统"
        },
        component: cmmRouterView,
        name: "营销系统",
        children: cmmRoutes
      },
    
      // 交易系統路由
      {
        path: "trade",
        meta: {
          title: "交易系統"
        },
        component: csmRouterView,
        name: "交易系統",
        children: csmRoutes
      },
    
      // 审批系統路由
      {
        path: "workflow",
        meta: {
          title: "审批系統"
        },
        component: cwfRouterView,
        name: "审批系統",
        children: cwfRoutes
      },
    
      // 报表系统路由
      {
        path: "report",
        meta: {
          title: "报表系统"
        },
        component: rptRouterView,
        name: "报表系统",
        children: rptRoutes
      },
    
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