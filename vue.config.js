const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  devServer: {
    port: 8080, // 端口
    disableHostCheck: true
  },
  // lintOnSave: false // 取消 eslint 验证
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    //添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
    // ============压缩图片 start============
    // 如果报错，重新用cnpm安装一次
    // config.module
    // .rule('images')
    // .use('image-webpack-loader')
    // .loader('image-webpack-loader')
    // .options({ bypassOnDebug: true })
    // .end()
    // ============压缩图片 end============
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      //构建项目时排除使用CDN的库
      config.externals = {
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'aos': 'AOS',
        'vue-lazyload': 'VueLazyload'
      }
      //gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugins.push(
          new CompressionWebpackPlugin({
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: new RegExp(
                  '\\.(' + productionGzipExtensions.join('|') + ')$'
              ),
              threshold: 10240, // 只有大小大于该值的资源会被处理 10240
              minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
              deleteOriginalAssets: false // 删除原文件
          })
      )
      // 代码压缩
      config.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                //生产环境自动删除console
                compress: {
                    drop_debugger: true,
                    drop_console: true,
                    pure_funcs: ['console.log']
                }
            },
            sourceMap: false,
            parallel: true
        })
      )
    }
  }
}

const cdn = {
  // 开发环境
  dev: {
    js: []
  },
  // 生产环境
  build: {
    js: [
      'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
      'https://cdn.bootcss.com/vuex/3.1.3/vuex.min.js',
      'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js',
      'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
      'https://cdn.bootcss.com/aos/3.0.0-beta.6/aos.js',
      'https://cdn.bootcss.com/vue-lazyload/1.3.3/vue-lazyload.js'
    ]
  }
}