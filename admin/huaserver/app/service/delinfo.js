'use strict';
const Service = require('egg').Service;
class DelinfoService extends Service {
  async delinfo(uid) {
    const {
      app
    } = this;
    let result = await app.mysql.delete('user', {
      uid
    });
    return result;
  };

}
// 是 必须要导出的
module.exports = DelinfoService;