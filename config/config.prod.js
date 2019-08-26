'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544582612713_1878';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  // add your config here
  config.middleware = ['proxy'];
  // config.redis = {
  //   client: {
  //     port: 6379, // Redis port
  //     host: '192.168.1.214', // Redis host
  //     password: 'auth',
  //     db: 0,
  //   },
  // };
  // config.sessionRedis = {
  //   key: 'EGG_SESSION',
  //   maxAge: 24 * 3600 * 1000, // 1 天
  //   httpOnly: true,
  //   encrypt: false,
  // };
  exports.logger = {
    outputJSON: true,
  };
  // 跨域设置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  exports.multipart = {
    mode: 'file',
    autoFields: false,
    defaultCharset: 'utf8',
    fieldNameSize: 100,
    fieldSize: '100mb',
    fields: 100,
    fileSize: '100mb',
    // fileExtensions: ['jpg','jpeg','png','bmp','BMP','JPG','PNG','JPEG'],
    // whitelist: ['jpg','jpeg','png','bmp','BMP','JPG','PNG','JPEG'],
    whitelist:['.jpg','.jpeg','.png','.bmp','.BMP','.JPG','.PNG','.JPEG','.wbmp', 
    '.webp',
    '.tif',
    '.psd',
    // text
    '.svg'],
    files: 100,
  };
  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/static', 
    dir: path.join(appInfo.baseDir, 'app/public'), // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };
  // jpg|jpeg|png|bmp|BMP|JPG|PNG|JPEG
  config.security = {
    csrf: {
      enable: false,
    },
  };
 


  return config;
};
