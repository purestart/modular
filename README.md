## 项目描述

> parent: 配置中心

> common: 公共组件库

> base: 基础平台

> fun: 功能模块（插件）

> main: 主项目 / 聚合项目

## 微前端拆分原理

<img src="https://gitee.com/_pure/codes/iuwzj39fhobstemc6an8249/raw?blob_name=modular1.png" >

<img src="https://gitee.com/_pure/codes/iuwzj39fhobstemc6an8249/raw?blob_name=modular2.png" >

解决github图片不显示问题

解决方法，打开路径C:\Windows\System32\drivers\etc下的hosts文件 添加如下地址
```
# GitHub Start 
192.30.253.112 github.com
192.30.253.119 gist.github.com
151.101.184.133 assets-cdn.github.com
151.101.184.133 raw.githubusercontent.com
151.101.184.133 gist.githubusercontent.com
151.101.184.133 cloud.githubusercontent.com
151.101.184.133 camo.githubusercontent.com
151.101.184.133 avatars0.githubusercontent.com
151.101.184.133 avatars1.githubusercontent.com
151.101.184.133 avatars2.githubusercontent.com
151.101.184.133 avatars3.githubusercontent.com
151.101.184.133 avatars4.githubusercontent.com
151.101.184.133 avatars5.githubusercontent.com
151.101.184.133 avatars6.githubusercontent.com
151.101.184.133 avatars7.githubusercontent.com
151.101.184.133 avatars8.githubusercontent.com
```
修改hosts文件后，刷新githab页面

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
