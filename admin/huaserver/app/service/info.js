'use strict';
const Service = require('egg').Service;
class InfoService extends Service {
  async getinfo(username) {
    const {
      app
    } = this;
    let result = await app.mysql.select('user');
    return result;
  };

  async addadmin(formdata) {
    const {
      app
    } = this;
    const result = await app.mysql.insert('user', formdata);
    return result;
  };

}
// 是 必须要导出的
module.exports = InfoService;