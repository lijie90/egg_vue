'use strict';

const Controller = require('egg').Controller;
const FormData = require('form-data');
const fs = require('fs');

class HomeController extends Controller {
  async dist(){
    const { ctx } = this;
    await this.ctx.render('dist/index.html');
  }
  async index() {
    const { ctx } = this;
    // await ctx.app.redis.set('token', 'token23431321');
    ctx.session.m = 'token13213123123';
    await this.ctx.render('h5index.html');
    // ctx.logger.info('redis取值', await ctx.app.redis);
  }
  async upload() {
    const { ctx } = this;
    const files = ctx.request.files;
    // const params = ctx.request.body;
    // console.log(ctx.req.headers['user-agent']);
    // console.log('res',ctx.res);

    console.log(11111, files);
    let imgPath = [];
    for (let i = 0; i < files.length; i++) {
      const form = new FormData();
      form.append('file', fs.createReadStream(files[i].filepath)); // form-data用法
      let result = await this.ctx.curl(
        'https://open.hbhxbb.com/api-file/file/upload',
        {
          method: 'post',
          timeout: [ '30s', '30s' ],
          headers: form.getHeaders(),
          stream: form,
          dataType: 'json', // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        }
      );
      console.log(result)
      imgPath.push(result.data.data)
      
    }

   
    ctx.body = imgPath;
  }


  async indexview() {
    const { ctx } = this;
    const params = ctx.query;
    console.log(params)
    await this.ctx.render(`html/index${params.index}.html`);
  }


}

module.exports = HomeController;
