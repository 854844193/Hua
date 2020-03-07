'use strict';

const Controller = require('egg').Controller;

class AdminLoginController extends Controller {
  async adminLogin() {
    const {
      ctx,
      service
    } = this;
    let loginData = ctx.request.body;
    // console.log(loginData.username);
    let result = await service.adminLogin.adminlogin(loginData.username)
    // console.log(result);
    let data = {
      code: 1,
      Msg: '登陆成功',
      result: result
    }
    if (!result) {
      data = {
        code: -1,
        Msg: '账号不存在'
      }
    }
    if (result && result.passwd != loginData.password) {
      data = {
        code: 0,
        Msg: '密码错误'
      }
    }
    ctx.body = data;
  };

}

module.exports = AdminLoginController;