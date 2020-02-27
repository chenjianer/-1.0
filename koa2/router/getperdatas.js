const router = require('koa-router')();
const db = require('../sql/sql');

router.post('/',async ctx => {
  let params = ctx.request.body;
  await db.query('select name,y from `getfchart` where id=?',[params.data]).then(res => {
    if (res){
      ctx.body = res
    } else {
      ctx.body = {
        code:'000',
        msg:'修改失败'
      }
    }
  })
});

module.exports = router.routes();