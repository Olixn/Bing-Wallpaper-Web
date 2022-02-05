module.exports = {
    chainWebpack: config => {
        config.module.rule('md')
          .test(/\.md/)
          .use('vue-loader')
          .loader('vue-loader')
          .end()
          .use('vue-markdown-loader')
          .loader('vue-markdown-loader/lib/markdown-compiler')
          .options({
              raw: true
          })
//         // 发布模式
//         config.when(process.env.NODE_ENV === 'production', config => {
//             config.entry('app').clear().add('./src/main-prod.js')

//             // 引入CDN
//             config.set('externals', {
//                 vue: 'Vue',
//                 'vue-router': 'VueRouter',
//                 axios: 'axios',
//             })

//             config.plugin('html').tap(args => {
//                 args[0].isProd = true
//                 return args
//             })
//         })


//         // 开发模式
//         config.when(process.env.NODE_ENV === 'development', config => {
//             config.entry('app').clear().add('./src/main-dev.js')

//             config.plugin('html').tap(args => {
//                 args[0].isProd = false
//                 return args
//             })
//         })
    },
}
