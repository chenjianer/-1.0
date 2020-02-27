const router = require('koa-router')();
const db = require('../sql/sql');
const times = require('../date/date');

// 增加用户
router.post('/', async (ctx) => {
  await db.query('select * from lists where code=?', [ctx.request.body.code]).then(res => {
    try {
      //  判断前台传过来的数据的用户名，在数据库中有没有，如果没有择添加到数据库中，如果有择返回相应的状态码
      if (res.length === 0) {
        // 获取时间
        let t = times();
        var sql = `insert into lists (name,code,outbound,warehouse,control,date,sort,warehousetime,textarea,number1,number2,number3,whichsort,price) values ("${ctx.request.body.name}","${ctx.request.body.code}","${ctx.request.body.outbound}","${ctx.request.body.warehouse}","${ctx.request.body.control}","${t}","${ctx.request.body.sort}","${ctx.request.body.warehousetime}","${ctx.request.body.textarea}","${ctx.request.body.number1}","${ctx.request.body.number2}","${ctx.request.body.number3}","${ctx.request.body.whichsort}","${ctx.request.body.price}")`
        db.query(sql)
        ctx.body = {
          msg: '添加成功',
          code: '111'
        }
      } else {
        ctx.body = {
          msg: '配件条码已存在，请重新输入',
          code: '000'
        }
      }
    } catch (e) {
      console.log(e);
    }

  })
});

module.exports = router.routes();
