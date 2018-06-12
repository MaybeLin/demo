const Router = require('koa-router');

const router = new Router();
const apiRouter = require('./api-router');

router
  .use(apiRouter.routes());


module.exports = router;
