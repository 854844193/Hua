'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')

class UploadsController extends Controller {
  async index() {
    const {
      ctx,
    } = this;
    // response是可以省略的
    const dest = '/public/upload/';
    const file = ctx.request.files[0]
    console.log(file);
    let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
    await fs.copyFileSync(file.filepath, to);
    fs.unlinkSync(file.filepath); //删除临时文件
    let cluster = this.app.config.cluster.listen;
    // 客户端要求是json格式
    ctx.body = {
      code: 1,
      src: `http://${cluster.hostname}:${cluster.port}${dest}${path.basename(file.filepath)}`
    };
  }

}

module.exports = UploadsController;