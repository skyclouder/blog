const Koa = require('koa')
const jwt = require('koa-jwt')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const convert = require('koa-convert');
const static = require('koa-static')   //静态资源服务插件
const path = require('path')           //路径管理
var session = require('koa-session-minimal')
var MysqlStore = require('koa-mysql-session')
var config = require('./config/default.js')
var cors = require('koa2-cors')
const {historyApiFallback}  = require('koa2-connect-history-api-fallback');
const users = require('./routes/users')
// const account = require('./routes/account')

// error handler
onerror(app)

// 配置jwt错误返回
app.use(function (ctx, next) {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401
      ctx.body = ApiErrorNames.getErrorInfo(ApiErrorNames.INVALID_TOKEN)
      // ctx.body = {
      //   // error: err.originalError ? err.originalError.message : err.message
      // }
    } else {
      throw err
    }
  })
})

// Unprotected middleware
app.use(function (ctx, next) {
  if (ctx.url.match(/^\/public/)) {
    ctx.body = 'unprotected\n'
  } else {
    return next()
  }
})

// Middleware below this line is only reached if JWT token is valid

app.use(
  jwt({ secret: config.secret, passthrough: true }).unless({
    path: [/\/register/, /\/user\/login/]
  })
)
//返回html
app.use(historyApiFallback({ whiteList: ['/api'] }));
// middlewares
app.use(convert(bodyparser({
  enableTypes: ['json', 'form', 'text']
})))
app.use(convert(json()))
app.use(convert(logger()))
const staticPath = '../pc_blog_FE/Streaming/dist'
app.use(static(
  path.join(__dirname, staticPath)
))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// cors
app.use(cors())

// routes
app.use(users.routes(), users.allowedMethods())
// app.use(account.routes(), account.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app



