'use strict';

const Controller = require('egg').Controller;

class GetshopController extends Controller {
  async shop() {
    const {
      ctx,
      service
    } = this;
    let result = await service.getshop.shop()
    // console.log(result);

    ctx.body = result;
  }
  async delshop() {
    const {
      ctx,
      service
    } = this;
    let data = ctx.query.id
    // console.log(data);
    let result = await service.getshop.delshop(data)
    // console.log(result);
    let deldata = {
      code: 1,
      Msg: '删除成功',
      result: result
    }
    ctx.body = deldata;
  }

  async updshop() {
    const {
      ctx,
      service
    } = this;
    // response是可以省略的
    const formData = ctx.query;
    console.log(formData);
    const result = await service.getshop.updshop(formData);
    // console.log(result);

    let data = {
      code: 1,
      Msg: '操作成功'
    };
    ctx.response.body = data;
  }

  async addshop() {
    const {
      ctx,
      service
    } = this;
    const formData = ctx.query;
    console.log(formData);
    const result = await service.getshop.addshop(formData);
    // console.log(result);

    let data = {
      code: 1,
      Msg: '操作成功'
    };
    ctx.response.body = data;
  }

}
module.exports = GetshopController;