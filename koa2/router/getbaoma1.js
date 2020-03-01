const router = require('koa-router')();
const db = require('../sql/sql');

router.post('/1', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 1 AND 17",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/2', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 18 AND 30",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/3', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 31 AND 53",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/4', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 54 AND 56",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/5', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 57 AND 63",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/6', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 64 AND 69",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/7', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 70 AND 95",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/8', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 96 AND 115",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/9', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 116 AND 133",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/10', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 134 AND 147",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/11', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 148 AND 167",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/12', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 168 AND 188",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/13', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 189 AND 203",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/14', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 204 AND 217",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/15', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 218 AND 226",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});
router.post('/16', async (ctx) => {
    let params = ctx.request.body;
    await db.query("SELECT * from `?` WHERE id BETWEEN 227 AND 245",[params.data]).then(
        res => {
            ctx.body = {
                res: res
            }
        })
});

module.exports = router.routes();
