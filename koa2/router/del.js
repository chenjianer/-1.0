const router = require('koa-router')();
const db = require('../sql/sql');

router.del('/',async ctx=> {
  let de = await ctx.request.body;
  console.log(de);
  await db.query('delete from lists where id=?',[de.id]).then(res => {
    ctx.body = {
      msg:'删除成功',
      code:'111'
    }
  })
});

module.exports = router.routes();
