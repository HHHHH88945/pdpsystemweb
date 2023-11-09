const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    lintOnSave:false,
    devServer:{
        proxy: {
            "/admin":{
                target:"http://192.168.16.248:9093/",
                ws:true,
                changeOrigin:true,
                pathRewrite: {'^/admin' : ''}
            }
        }
    }
})
