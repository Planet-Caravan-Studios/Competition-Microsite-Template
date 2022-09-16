const path = require('path')
const webpack = require('webpack')
const glob = require('glob')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

const entriesOnFS = glob.sync('./app/src/*.*')

let entries = {}
entriesOnFS.map(entry => {
  entries[entry.split('/').pop().split('.')[0]] = entry
})

const config = {
  mode: 'production',

  entry: entries,

  output: {
    path: path.join(__dirname, '.tmp/scripts'),
    filename: '[name].js',
    publicPath: '/scripts/'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss'],
    plugins: [
      new TsConfigPathsPlugin(),
    ]
  },

  module: {
    exprContextRegExp: /$^/,
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true,
              // data: '@import 'globals'',
              includePaths: [
                path.join(__dirname, 'src')
              ]
            }
          }
        ],
        include: path.join(__dirname, 'src')
      },
    ],
  },

}

const configDev = Object.assign({}, config, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map'
})

const configProd = config

module.exports = function (env) {
  return env === 'production' ? configProd : configDev
}
