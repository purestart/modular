module.exports = {
  platform: {
    name: 'hyy',
    title: 'modular微服务'
  },
  plugins: [
    {
      name: '系统管理',
      path: 'sys',
      title: '系统管理',
      folder: 'base'
    }
    // {
    //   name: 'xx系统',
    //   path: 'coupon',
    //   title: 'xx系统',
    //   folder: 'xxx',
    //   noMenuRoutes:'xxxNoMenuRoutes'
    //   // customRoutes: 'znyfCcm'  //自定义路由
    //   // customRegComponents: 'znyfCcm'  //自定义组件注册
    // }
  ],
  preStage: 1
}
