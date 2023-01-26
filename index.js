const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Vercel-9999999 : ' +( ctx.request.querystring || 'null');
});

app.listen(3008, () => {
    console.log('3008项目启动')
});