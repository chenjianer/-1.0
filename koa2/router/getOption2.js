const router = require('koa-router')();
const db = require('../sql/sql');
router.get('/', async (ctx) => {
    await db.query('SELECT value2 FROM `option`').then(res => {
        if (res === 0) {
            ctx.body = {
                msg: 'nothing',
                code: '000'
            }
        } else {
            ctx.body = {
                res: res
            }
        }
    })
})
module.exports = router.routes();