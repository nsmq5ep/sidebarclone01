const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.xx$/,
          include: [path.resolve(__dirname, 'ignore')],
          use: 'null-loader'
        },
      ],
    },
  },
})
