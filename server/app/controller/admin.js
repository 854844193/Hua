'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async login(username) {
    const { ctx, service } = this;
    let formData = ctx.request.query;
    let result = await service.admin.login(formData.username);
    let data = { code: 1, Msg: '登录成功' };
    // 账号不存在
    if (!result) {
      data = { code: -1, Msg: '账号不存在' };
    }
    // 密码错误
    if (result && result.password != formData.password) {
      data = { code: 0, Msg: '密码错误' };
    }
    ctx.body = data;
  }
  //注册:1\检查用户名是否已经存在
  //	   2(1)\查--有-->已存在
  //	   2(2)\查-没有-->添加insert
  //	   3\insertsql
  async regist() {
    const { ctx, service } = this;
    let forms = ctx.request.body;
    let result = await service.admin.regist(forms);
    let data = { code: 1, Msg: "注册成功" };
    if (!result.uid) {
      data = { code: -1, Msg: "注册失败" }
    };
    // if(result.username){
    //   data = { code: 0, Msg: "账号已存在" }
    // }
    ctx.body = data;

  }
  async select() {
    const { ctx, service } = this;
    let formData = ctx.request.query;
    let result = await service.admin.query(formData);
    let data = { code: 1, result: result }
    ctx.body = data;
  }
async updata(){
  const { ctx, service } = this;
  let formData = ctx.request.body;
  let result = await service.admin.updata(formData);
  let data = {code:1, Msg:'操作成功'};
  ctx.response.body = data;
}
async del(){
  const { ctx, service } = this;
  let formData = ctx.request.query;
  let result = await service.admin.del(formData);
  let data = { code: 1, Msg:'删除成功' }
  ctx.body = data;
}
async add(){
const { ctx, service } = this;
let formData = ctx.request.body;
console.log(formData)
  let result = await service.admin.add(formData);
  let data = { code: 1, Msg:'成功插入数据' }
  ctx.body = data;

}


}
module.exports = AdminController;
