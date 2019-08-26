const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');

module.exports = options => {
  return async function proxy(ctx, next) {
    ctx.logger.info(ctx.url)
    if (ctx.url.startsWith('/oldUser')) {
      //匹配有api字段的请求url,杰哥注释=>es6字符串开头的方法
      ctx.respond = false; // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response
      await k2c(
        httpProxy({
          target: 'http://zuul233.hxdkfp.com:7200/api-backstage/backstage/management',
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/oldUser': ''
          }
        })
      )(ctx, next);
    }
    await next();
  };
};
