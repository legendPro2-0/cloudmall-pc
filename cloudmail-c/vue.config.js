const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        //httpL//localhost:8080/api -> 3000 -> 后端拿到？？？
        changeOrigin: true,
        //http://localhost:8080/api  ->  http://localhost:3000/api 
        //http://localhost:8080/api -> http://localhost:3000/
        pathRewrite: {'^/api' : ''}
      }
    }
  }
})
