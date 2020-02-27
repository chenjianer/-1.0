const router = require('koa-router')();
const db = require('../sql/sql');

router.post('/', async ctx => {
  let params = ctx.request.body;
  if (params.data === '1') {
    await db.query('select * from `charttab` where id=? and pid between 1 and 120', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  } else if (params.data === '2') {
    await db.query('select * from `charttab` where id=? and pid between 121 and 373', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  } else if (params.data === '3') {
    await db.query('select * from `charttab` where id=? and pid between 374 and 433', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  } else if (params.data === '4') {
    await db.query('select * from `charttab` where id=? and pid between 434 and 517', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  } else if (params.data === '5') {
    await db.query('select * from `charttab` where id=? and pid between 518 and 577', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  } else if (params.data === '6') {
    await db.query('select * from `charttab` where id=? and pid between 578 and 673', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  }else if (params.data === '7') {
    await db.query('select * from `charttab` where id=? and pid between 674 and 769', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  }else if (params.data === '8') {
    await db.query('select * from `charttab` where id=? and pid between 770 and 912', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  }else if (params.data === '9') {
    await db.query('select * from `charttab` where id=? and pid between 913 and 984', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  }else if (params.data === '10') {
    await db.query('select * from `charttab` where id=? and pid between 985 and 1176', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  }else if (params.data === '11') {
    await db.query('select * from `charttab` where id=? and pid between 1177 and 1404', [params.data2]).then(res => {
      if (res) {
        ctx.body = res
      } else {
        ctx.body = {
          code: '000',
          msg: '失败'
        }
      }
    })
  }
});

module.exports = router.routes();