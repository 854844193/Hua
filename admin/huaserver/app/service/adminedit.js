'use strict';
const Service = require('egg').Service;
class AdmineditService extends Service {
  async edit(formdata) {
    const {
      app
    } = this;
    const result = await app.mysql.update('user', formdata, {
      where: {
        uid: formdata.uid
      }
    });
    return result;
  };

}
// 是 必须要导出的
module.exports = AdmineditService;