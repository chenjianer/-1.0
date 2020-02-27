const router = require('koa-router')();
const db = require('../sql/sql');

router.get('/1', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='曲柄连杆机构' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/2', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='配气机构' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/3', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='冷却系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/4', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='润滑系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/5', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='启动系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/6', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='供油系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/7', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='点火系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/8', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='行驶系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/9', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='转向系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/10', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='制动系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/11', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='传动系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});
router.get('/12', async (ctx) => {
  await db.query("select SUM(price*(warehouse-outbound)) from lists where sort='照明舒适系统' group by year(warehousetime)").then(
    res => {
      if (res.length >= 1) {
        var json = JSON.stringify(res);
        ctx.body = JSON.parse(json);
      } else {
        ctx.body = {
          msg: '数据为空',
          code: '000'
        }
      }
    })
});

module.exports = router.routes();
