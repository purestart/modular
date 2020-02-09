const baseEnvConfig = require('./base/env.config')
const baseBuildConfig = require('./base/build.config')
const mainBuildConfig = require('./main/build.config')
const ctmBuildConfig = require('./ctm/build.config')
const ccmBuildConfig = require('./ccm/build.config')
const camBuildConfig = require('./cam/build.config')
const rptBuildConfig = require('./rpt/build.config')
const cmmBuildConfig = require('./cmm/build.config')
const crmBuildConfig = require('./crm/build.config')
// const commonBuildConfig = require('./common/build.config')

module.exports = {
  build: {
    base: baseBuildConfig,
    main: mainBuildConfig,
    ctm: ctmBuildConfig,
    ccm: ccmBuildConfig,
    cam: camBuildConfig,
    rpt: rptBuildConfig,
    cmm: cmmBuildConfig,
    crm: crmBuildConfig
    // common: commonBuildConfig
  },
  env: {
    base: baseEnvConfig
  }
}
