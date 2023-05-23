const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置webpack
  configureWebpack: {
    resolve: {
      // 配置别名
      // @是已经配置好的路径别名，对应的是项目中的src目录
      alias: {
        "utils": "@/utils"
      }
    }
  }
})
