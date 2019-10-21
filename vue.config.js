module.export = {
    configureWebpack: {
        resolve: {
            alias:{
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'assets':'@/assets'
            }

        }
    }
}