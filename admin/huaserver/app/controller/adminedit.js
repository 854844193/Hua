'use strict';

const Controller = require('egg').Controller;

class AdmineditController extends Controller {
  async edit() {
    const {
      ctx,
      service
    } = this;
    // response是可以省略的
    const formData = ctx.query;
    console.log(formData);
    const result = await service.adminedit.edit(formData);
    let data = {
      code: 1,
      Msg: '操作成功'
    };
    ctx.response.body = data;
  }
}
module.exports = AdmineditController;