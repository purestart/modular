const baseEnvConfig = require('./base/env.config')
const baseBuildConfig = require('./base/build.config')
const mainBuildConfig = require('./main/build.config')
// const xxxBuildConfig = require('./xxx/build.config')

module.exports = {
  build: {
    base: baseBuildConfig,
    main: mainBuildConfig
    // xxx: xxxBuildConfig
  },
  env: {
    base: baseEnvConfig
  }
}
