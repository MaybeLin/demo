const path = require('path');
const Koa = require('koa');
const router = require('./router');
// 创建koa实例
const app = new Koa();


app.use(router.routes());



// 启动
app.listen(1111);

