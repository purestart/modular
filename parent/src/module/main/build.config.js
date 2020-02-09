module.exports = {
  platform: {
    name: 'hyy',
    title: '新辰星 慧影云V1.0.0'
  },
  plugins: [
    {
      name: '系统管理',
      path: 'sys',
      title: '系统管理',
      folder: 'base'
    }
    // {
    //   name: '票券系统',
    //   path: 'coupon',
    //   title: '票券系统',
    //   folder: 'xxx',
    //   noMenuRoutes:'xxxNoMenuRoutes'
    //   // customRoutes: 'znyfCcm'  //自定义路由
    //   // customRegComponents: 'znyfCcm'  //自定义组件注册
    // }
  ],
  preStage: 1
}
