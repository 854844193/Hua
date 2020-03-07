'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.post('/adminLogin', controller.adminLogin.adminLogin);
  router.get('/getinfo', controller.info.getinfo);
  router.get('/delinfo', controller.delinfo.del);
  router.get('/adminedit', controller.adminedit.edit);
  router.get('/getShop', controller.getshop.shop);
  router.get('/getShop/delshop', controller.getshop.delshop);
  router.get('/getShop/updshop', controller.getshop.updshop);
  router.get('/getShop/addshop', controller.getshop.addshop);
  router.get('/getinfo/addadmin', controller.info.addadmin);
  router.post('/uploads', controller.uploads.index);

};