const path = require('path');

module.exports = {
  /**
   * 配置 css
   */
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        globalVars: {
        },
      },
    },
  },
  /**
   * 配置 webpack
   */
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'iview-loader',
              options: { prefix: true },
            },
          ],
        },
      ],
    },
  },
  /**
   * 配置 plugins 选项
   */
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/assets/less/variable.less'),
        path.resolve(__dirname, 'src/assets/less/reset.less'),
        path.resolve(__dirname, 'src/assets/less/common.less'),
      ],
    },
  },
};
