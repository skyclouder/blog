// 数据库配置
const config = {
    port: 3000,
    database: {
      DATABASE: 'blog', //数据库
      USERNAME: 'root', //用户
      PASSWORD: 'Pppqqq125!', //密码
      PORT: '3306', //端口
      HOST: '127.0.0.1' //服务ip地址
    },
    secret: 'jwt_secret'
  }

  module.exports = config