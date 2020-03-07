// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminedit = require('../../../app/controller/adminedit');
import ExportAdminLogin = require('../../../app/controller/adminLogin');
import ExportDelinfo = require('../../../app/controller/delinfo');
import ExportGetshop = require('../../../app/controller/getshop');
import ExportHome = require('../../../app/controller/home');
import ExportInfo = require('../../../app/controller/info');
import ExportUploads = require('../../../app/controller/uploads');

declare module 'egg' {
  interface IController {
    adminedit: ExportAdminedit;
    adminLogin: ExportAdminLogin;
    delinfo: ExportDelinfo;
    getshop: ExportGetshop;
    home: ExportHome;
    info: ExportInfo;
    uploads: ExportUploads;
  }
}
