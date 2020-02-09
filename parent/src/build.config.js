const configUtil = require('./common/utils/config.util')
let config = {
  platform: {
    name: 'modular',
    title: 'xxx系统'
  },
  plugins: [
    {
      name: '基础平台',
      path: 'sys',
      title: '系统管理',
      folder: 'base'
    }
  ],
  sourceType: 'local', //资源加载优先级
  source: {
    js: [
      {
        desc: '资源描述',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vender.amd.min.js',
        cdnSrc: ''
      },
      {
        desc: 'vue依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vue.js',
        cdnSrc: ''
      },
      {
        desc: 'vue-router依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vue-router.min.js',
        cdnSrc: 'https://cdn.bootcss.com/vue-router/3.0.3/vue-router.min.js'
      },
      {
        desc: 'vuex依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vuex.min.js',
        cdnSrc: 'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js'
      },
      {
        desc: 'axios依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/axios.js',
        cdnSrc: 'https://cdn.bootcss.com/axios/0.19.0/axios.min.js'
      },
      {
        desc: 'element ui依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/index.js',
        cdnSrc: 'https://cdn.bootcss.com/element-ui/2.8.2/index.js'
      },
      {
        desc: 'moment依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/moment.min.js',
        cdnSrc: 'https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js'
      },
      {
        desc: 'echarts依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/echarts.min.js',
        cdnSrc: 'https://cdn.bootcss.com/echarts/4.2.1/echarts.min.js'
      },
      {
        desc: 'echarts bmap依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/bmap.min.js',
        cdnSrc: 'https://cdn.bootcss.com/echarts/4.2.1/extension/bmap.min.js'
      },
      {
        desc: 'nprogress 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/nprogress.min.js',
        cdnSrc: 'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js'
      },
      {
        desc: 'Sortable 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/Sortable.min.js',
        cdnSrc: ''
      },
      {
        desc: 'vuedraggable 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vuedraggable.umd.min.js',
        cdnSrc:
          '//cdnjs.cloudflare.com/ajax/libs/Vue.Draggable/2.20.0/vuedraggable.umd.min.js'
      },
      {
        desc: 'alicdn nch5 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: '',
        cdnSrc: '//g.alicdn.com/sd/nch5/index.js?t=2019080612'
      },
      {
        desc: 'crypto-js 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/crypto-js.min.js',
        cdnSrc: 'https://cdn.bootcss.com/crypto-js/3.1.9/crypto-js.min.js'
      },
      {
        desc: 'jquery 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/jquery.min.js',
        cdnSrc: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js'
      },
      {
        desc: 'vue-echarts 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vue-echarts.js',
        cdnSrc: 'https://cdn.jsdelivr.net/npm/vue-echarts@4.0.2'
      },
      {
        desc: 'swiper 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/swiper/swiper.min.js',
        cdnSrc: ''
      },
      {
        desc: 'vue-awesome-swiper 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/vue-awesome-swiper.js',
        cdnSrc: ''
      },
      {
        desc: 'v-charts 依赖包',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/v-charts/index.min.js',
        cdnSrc: 'https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js'
      },
      {
        desc: 'lodash 依赖包',
        version: null,
        moduleName: 'lodash',
        externalName: '_',
        baseSrc: 'assets/external/js/lodash.min.js',
        cdnSrc: 'https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js'
      },
      {
        desc: 'commonLib 基础UI库',
        version: null,
        moduleName: 'commonLib',
        externalName: 'commonLib',
        baseSrc: 'assets/external/common/commonLib.umd.min.js',
        cdnSrc: '',
        disableCache: true
      },
      {
        desc: 'xlsx 库',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/xlsx.core.min.js',
        cdnSrc: ''
      },
      {
        desc: 'FileSaver 库',
        version: null,
        moduleName: null,
        externalName: null,
        baseSrc: 'assets/external/js/FileSaver.min.js',
        cdnSrc: ''
      }
      // {
      //   desc: '打印插件',
      //   version: null,
      //   moduleName: 'printJS',
      //   externalName: 'print-js',
      //   baseSrc: 'assets/external/js/print.min.js',
      //   cdnSrc: ''
      // }
    ],
    css: [
      {
        desc: 'element 样式',
        version: null,
        baseSrc: 'assets/external/js/index.css',
        cdnSrc: 'https://cdn.bootcss.com/element-ui/2.8.2/theme-chalk/index.css'
      },
      {
        desc: 'nprogress 样式',
        version: null,
        baseSrc: 'assets/external/js/nprogress.min.css',
        cdnSrc: 'https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css'
      },
      {
        desc: '阿里图标',
        version: null,
        baseSrc: '',
        cdnSrc: '//at.alicdn.com/t/font_994985_nbkrbumhdug.css'
      },
      {
        desc: 'swiper 样式',
        version: null,
        baseSrc: 'assets/external/swiper/swiper.min.css',
        cdnSrc: ''
      },
      {
        desc: 'v-charts 样式',
        version: null,
        baseSrc: 'assets/external/v-charts/style.min.css',
        cdnSrc: 'https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css'
      },
      {
        desc: 'commonLib 基础UI库',
        version: null,
        baseSrc: 'assets/external/common/commonLib.min.css',
        cdnSrc: '',
        disableCache: true
      }
    ]
  },
  preStage: 1
}

module.exports = {
  getConfig: moduleName => configUtil.getConfig(moduleName, config),
  getExternal: configUtil.getExternal
}
