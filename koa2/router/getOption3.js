const router = require('koa-router')();
const db = require('../sql/sql');
router.post('/', async (ctx) => {
    let params = ctx.request.body
    if (params.data === '1') {
        await db.query('SELECT baomaoption FROM `option`').then(res => {
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
    }else if(params.data === '2'){
        await db.query('SELECT benchioption FROM `option`').then(res => {
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
    }else if(params.data === '3'){
        await db.query('SELECT bentianoption FROM `option`').then(res => {
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
    }

})
module.exports = router.routes();