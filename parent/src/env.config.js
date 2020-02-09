const configUtil = require('./common/utils/config.util.js')
let env = {
  //平台信息配置
  platform: {
    name: 'modular',
    title: 'xxx系统'
  },
  //环境变量配置
  baseUrlMapper: [
    {
      domain: '127.0.0.1',
      // baseURL: '//apidev.xxxxxx.com'
      baseURL: '//apitest.xxxxxx.com'
    },
    {
      domain: 'localhost',
      baseURL: '//apidev.xxxxxx.com'
    },
    {
      domain: 'dev.xxxxxx.com',
      baseURL: '//apidev.xxxxxx.com'
    },
    {
      domain: 'newdev.xxxxxx.com',
      baseURL: '//apidev.xxxxxx.com'
    },
    {
      domain: 'www.xxxxxx.com',
      baseURL: '//api.xxxxxx.com'
    },
    {
      domain: 'test.xxxxxx.com',
      baseURL: '//apitest.xxxxxx.com'
    },
    {
      domain: 'pre.xxxxxx.com',
      baseURL: '//apipre.xxxxxx.com'
    },
    {
      domain: 'newtest.xxxxxx.com',
      baseURL: '//apitest.xxxxxx.com'
    },
    {
      domain: 'newpre.xxxxxx.com',
      baseURL: '//apipre.xxxxxx.com'
    }
  ]
}

module.exports = {
  getEnv: moduleName => configUtil.getEnv(moduleName, env)
}
