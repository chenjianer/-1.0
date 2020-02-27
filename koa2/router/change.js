const router = require('koa-router')();
const db = require('../sql/sql');

router.post('/',async ctx => {
  let params = ctx.request.body;
  await db.query('update news set title=?,jian=?,date=? where id=?',[params.title,params.jian,params.date,params.id]).then(res => {
    if (res){
      ctx.body = {
        code:'111',
        msg:'修改成功'
      }
    } else {
      ctx.body = {
        code:'000',
        msg:'修改失败'
      }
    }
  })
});

module.exports = router.routes();