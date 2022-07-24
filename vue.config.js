const { defineConfig } = require('@vue/cli-service');
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/admin' : '/',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'https://giao.club',
        ws: false,
        secure: true, 
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''//请求的时候使用这个api就可以
        // }
      },
    }
  },
  configureWebpack: {
    resolve: {
    extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        '~': process.cwd(),
        public: resolve('public'),
        components: resolve('src/components'),
        // util: resolve('src/utils'),
        // store: resolve('src/store'),
        router: resolve('src/router')
      }
    }
  }
})
