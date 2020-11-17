module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    outputDir: 'dist',
    productionSourceMap: false,
    devServer: {
        open: true, //浏览器自动打开页面
        https: false,
        //port:8899,
        //host: "localhost",
        hotOnly: false, //热更新（webpack已实现了，这里false即可）
        proxy: {
            '/api':{
                //前后端联调时注释掉
                target:'http://yapi.jayud.com/mock/16/',
                //前后端联调时放开注释
                // target:'http://localhost:9091',
                //测试环境调试
                target:'http://test.jmall.jayud.com:9443',
                changeOrigin:true,//是否跨域
                pathRewrite:{
                    '/':''
                }
            }
        }
    }
}