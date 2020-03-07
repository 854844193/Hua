// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminedit = require('../../../app/service/adminedit');
import ExportAdminLogin = require('../../../app/service/adminLogin');
import ExportDelinfo = require('../../../app/service/delinfo');
import ExportGetshop = require('../../../app/service/getshop');
import ExportInfo = require('../../../app/service/info');

declare module 'egg' {
  interface IService {
    adminedit: ExportAdminedit;
    adminLogin: ExportAdminLogin;
    delinfo: ExportDelinfo;
    getshop: ExportGetshop;
    info: ExportInfo;
  }
}
