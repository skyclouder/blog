const Koa = require('koa')   //koa2中间件依赖
const app = new Koa()       //js的继承
const Router = require('koa-router')  //路由依赖的中间间
const static = require('koa-static')   //静态资源服务插件
const path = require('path')           //路径管理
const bodyParser = require('koa-bodyparser')  //请求体，返回体解析类似json，text，图片等
// app.use( async ( ctx ) => {
//     ctx.body = 'hello world'
// })                           //koa2中间件，使用路由的(使用路由后，这里就不会在编辑代码了)

app.use(bodyParser())    //使用解析上下文插件

// 配置静态资源
const staticPath = '../pc_blog_FE/Streaming/dist'
app.use(static(
    path.join(__dirname, staticPath)
))
app.use(async (ctx) => {
    console.log(ctx.url)
    if (ctx.url === '/' && ctx.method === 'GET') {
        // 当GET请求时候返回表单页面
        let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>nickName</p>
          <input name="nickName" /><br/>
          <p>email</p>
          <input name="email" /><br/>
          <button type="submit">submit</button>
        </form>
      `
        ctx.body = html
    } else if (ctx.url === '/login' && ctx.method === 'POST') {
        // 当POST请求的时候，中间件koa-
        console.log("5555")
        let postData = ctx.request.body
        ctx.body = postData
    } else {
        // 其他请求显示404
        ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
})

app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000')
})
