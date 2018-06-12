const Router = require('koa-router');
const apiRouter = new Router({
  prefix: '/api',
});
apiRouter.get('/user/login', async (ctx) => {
  const username = ctx.request.query.username;
  const pwd = ctx.request.query.password;
  if (username == 'admin' && pwd == 'admin') {
    ctx.body = {
       code: 20000,
       data: {
         token: 'admin'
       }
    };
  }
});
apiRouter.get('/user/info', async (ctx) => {
  const token = ctx.request.query.token;
  if (token == 'admin' ) {
    ctx.body = {
      code: 20000,
      data: {
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: "maybe",
        roles: ["shixi"]
      }
    };
  }
});

module.exports = apiRouter;
