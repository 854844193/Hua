'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
  async getinfo() {
    const {
      ctx,
      service
    } = this;
    let result = await service.info.getinfo()
    console.log(result);
    ctx.body = result;
  }

  async addadmin() {
    const {
      ctx,
      service
    } = this;
    const formData = ctx.query;
    console.log(formData);
    const result = await service.info.addadmin(formData);
    // console.log(result);
    ctx.response.body = result;
  }

}
module.exports = InfoController;