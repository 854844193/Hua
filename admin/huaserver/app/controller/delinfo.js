'use strict';

const Controller = require('egg').Controller;

class DelinfoController extends Controller {
  async del() {
    const {
      ctx,
      service
    } = this;
    let data = ctx.query.id
    console.log(data);
    let result = await service.delinfo.delinfo(data)
    console.log(result);
    let deldata = {
      code: 1,
      Msg: '删除成功',
      result: result
    }
    ctx.body = deldata;
  }
}
module.exports = DelinfoController;