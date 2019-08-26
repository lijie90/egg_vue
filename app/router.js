"use strict";
const proxy = require('http-proxy-middleware');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/dev", controller.home.dist);
  // router.get("/index", controller.home.index);
  // router.post("/upload", controller.home.upload);
  // router.get("/indexview", controller.home.indexview);
  router.get("/*",controller.home.dist);//为了解决刷新后报404的问题，相当于配置一个404异常界面重定向到vue打包后的界面

  
};
