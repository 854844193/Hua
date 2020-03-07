'use strict';

const Service = require('egg').Service;

class AdminLoginService extends Service {
  async adminlogin(username) {
    const {
      app
    } = this;
    // console.log(username);

    let result = await app.mysql.get('adminlogin', {
      username
    })
    return result
  }
}

module.exports = AdminLoginService;