'use strict';
const Service = require('egg').Service;
class GetshopService extends Service {
  async shop(username) {
    const {
      app
    } = this;
    let result = await app.mysql.select('shop');
    return result;
  };


  async delshop(sid) {
    const {
      app
    } = this;
    let result = await app.mysql.delete('shop', {
      sid
    });
    return result;
  };

  async updshop(formdata) {
    const {
      app
    } = this;
    const result = await app.mysql.update('shop', formdata, {
      where: {
        sid: formdata.sid
      }
    });
    return result;
  };

  async addshop(formdata) {
    const {
      app
    } = this;
    const result = await app.mysql.insert('shop', formdata);
    return result;
  };


}
// 是 必须要导出的
module.exports = GetshopService;