'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// --------接口请求开始--------

const express = require('express')
// 请求server
var app = express()
// 加载本地数据文件
var appData = require('../static/data.json')
var gameOnes = appData.gameOnes
var gameTwos = appData.gameTwos
var gameThrees = appData.gameThrees
var gameFours = appData.gameFours
var gameFives = appData.gameFives
var gameSixs = appData.gameSixs
var gameSevens = appData.gameSevens
var gameIntrod = appData.gameIntrod

var oToolsData = require('../static/tools.json')
var gameProps = oToolsData.gameProps
var gameDetail = oToolsData.gameDetail
var gameHero = oToolsData.gameHero
var HeroDetail = oToolsData.HeroDetail

var oCoinData = require('../static/table.json')
var tablesData = oCoinData.tablesData

var myToolData = require('../static/mytool.json')
var toolList = myToolData.myProps

var duiHuan = require('../static/table2.json')
var tool2 = duiHuan.tablesData
var PropRecord = duiHuan.tablesData1

var caoZuo = require('../static/table3.json')
var tool3 = caoZuo.tablesData
var weituo = caoZuo.tablesData1
var myCurrency = caoZuo.table1
var myProps = caoZuo.table2

var allNews = require('../static/table5.json')
var ALLMess = allNews.allMessage

// var MyEchart = require('../static/table6.json')
// var kLine = MyEchart.data.dailyData

var YouEchart = require('../static/table7.json')
var YoukLine = YouEchart.rawData

// 个人信息数据
var myInfoData = require('../static/table8.json')
var BackCard = myInfoData.backcard
var WeChat = myInfoData.wechat
var Alipay = myInfoData.alipay
var WithDraw = myInfoData.withdraw
var JiaoYi = myInfoData.jiaoyi
var TiXian = myInfoData.tixian
var Operating = myInfoData.operating

var apiRoutes = express.Router();
app.use('/api', apiRoutes);

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/gameOnes', function(req, res){
        res.json({
          errno: 0,
          data: gameOnes
        });
      });

      app.get('/api/gameTwos', function(req, res){
        res.json({
         errno: 0,
         data: gameTwos
       });
      });

      app.get('/api/gameThrees', function(req, res){
        res.json({
          errno: 0,
          data: gameThrees
        });
      });

      app.get('/api/gameFours', function(req, res){
        res.json({
          errno: 0,
          data: gameFours
        });
      });

      app.get('/api/gameFives', function(req, res){
        res.json({
         errno: 0,
         data: gameFives
       });
      });

      app.get('/api/gameSixs', function(req, res){
        res.json({
          errno: 0,
          data: gameSixs
        });
      });

      app.get('/api/gameSevens', function(req, res){
        res.json({
          errno: 0,
          data: gameSevens
        });
      });

      app.get('/api/gameIntrod', function(req, res){
        res.json({
          errno: 0,
          data: gameIntrod
        });
      });

      app.get('/api/gameProps', function(req, res){
        res.json({
          errno: 0,
          data: gameProps
        });
      });

      app.get('/api/gameDetail', function(req, res){
        res.json({
          errno: 0,
          data: gameDetail
        });
      });

      app.get('/api/gameHero', function(req, res){
        res.json({
          errno: 0,
          data: gameHero
        });
      });

      app.get('/api/HeroDetail', function(req, res){
        res.json({
          errno: 0,
          data: HeroDetail
        });
      });

      app.get('/api/tablesData', function(req, res){
        res.json({
          errno: 0,
          data: tablesData
        });
      });

      app.get('/api/toolList', function(req, res){
        res.json({
          errno: 0,
          data: toolList
        });
      });

      app.get('/api/tool2', function(req, res){
        res.json({
          errno: 0,
          data: tool2
        });
      });

      app.get('/api/PropRecord', function(req, res){
        res.json({
          errno: 0,
          data: PropRecord
        });
      });

      app.get('/api/tool3', function(req, res){
        res.json({
          errno: 0,
          data: tool3
        });
      });

      app.get('/api/weituo', function(req, res){
        res.json({
          errno: 0,
          data: weituo
        });
      });

      app.get('/api/myCurrency', function(req, res){
        res.json({
          errno: 0,
          data: myCurrency
        });
      });

      app.get('/api/myProps', function(req, res){
        res.json({
          errno: 0,
          data: myProps
        });
      });

      app.get('/api/ALLMess', function(req, res){
        res.json({
          errno: 0,
          data: ALLMess
        });
      });

      // app.get('/api/kLine', function(req, res){
      //   res.json({
      //     errno: 0,
      //     data: kLine
      //   });
      // });
      // YoukLine

      app.get('/api/YoukLine', function(req, res){
        res.json({
          errno: 0,
          data: YoukLine
        });
      });

      // ------------------个人信息-------------------
      app.get('/api/BackCard', function(req, res){
        res.json({
          errno: 0,
          data: BackCard
        });
      });

      app.get('/api/WeChat', function(req, res){
        res.json({
          errno: 0,
          data: WeChat
        });
      });

      app.get('/api/Alipay', function(req, res){
        res.json({
          errno: 0,
          data: Alipay
        });
      });

      app.get('/api/WithDraw', function(req, res){
        res.json({
          errno: 0,
          data: WithDraw
        });
      });

      app.get('/api/JiaoYi', function(req, res){
        res.json({
          errno: 0,
          data: JiaoYi
        });
      });

      app.get('/api/TiXian', function(req, res){
        res.json({
          errno: 0,
          data: TiXian
        });
      });

      app.get('/api/Operating', function(req, res){
        res.json({
          errno: 0,
          data: Operating
        });
      });

      // ------------------个人信息结束-------------------
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
