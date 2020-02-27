const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('koa-router')();
const login = require('./router/login.js');
const lists = require('./router/lists');
const adds = require('./router/adduser');
const news = require('./router/news');
const hchar = require('./router/hchar');
const edit = require('./router/edit');
const del = require('./router/del');
const rmall = require('./router/rmall');
const getOption = require('./router/getOption')
const getOption2 = require('./router/getOption2')
const getfchart = require('./router/getfchart')
const choose = require('./router/choose')
const getchart = require('./router/getchart')
const change = require('./router/change')
const getperdatas = require('./router/getperdatas')
const setdatay = require('./router/setdatay')
const uChart = require('./router/updateChart')
const path = require('path')
const static = require('koa-static')
const cors = require('koa2-cors');
const app = new Koa();
require('./token/proving');
app.use(bodyparser());
app.use(static(path.join(__dirname,'./public')));
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/login') {
      return "*"; // 允许来自所有域名请求
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 登陆
router.use('/login', login);
// 列表
router.use('/lists', lists);
// 添加
router.use('/adduser', adds);
// 新闻
router.use('/news', news);
// 图形化
router.use('/hchar', hchar);
// 编辑用户
router.use('/edit', edit);
// 删除用户
router.use('/delete', del);
// 批量删除用户
router.use('/rmall', rmall);
// 获取option
router.use('/getOption', getOption);
router.use('/getOption2', getOption2);
// 获取对应 highchart
router.use('/getchart', getchart);
// 获取对应月份的 highchart
router.use('/getfchart', getfchart);
// 获取对应月份的 highchart
router.use('/choose', choose);
router.use('/change', change);
router.use('/getperdatas', getperdatas);
router.use('/setdatay', setdatay);
/* 子路由 */
router.use('/uChart', uChart);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);
