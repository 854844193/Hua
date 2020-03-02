'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.admin.login);
  router.post('/regist',controller.admin.regist);
  router.get('/select',controller.admin.select);
  router.post('/updata',controller.admin.updata);
  router.get('/del',controller.admin.del);
  router.post('/add',controller.admin.add);
};
