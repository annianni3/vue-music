const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'common': path.join(__dirname, 'src/assets'),
                'components': path.join(__dirname, 'src/components'),
                'api': path.join(__dirname, 'src/api'),
            },
        }
    }
}
