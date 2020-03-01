import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve)
    },
    {
      path: '/homes',
      name: 'homes',
      component: resolve => require(['@/components/homes'], resolve),
      meta: { auth: true },
      children: [
        {
          path: '/',
          name: 'one',
          meta: { auth: true },
          component: resolve => require(['@/page/one'], resolve)
        },
        {
          path: 'two',
          name: 'two',
          meta: { auth: true },
          component: resolve => require(['@/page/two'], resolve)
        },
        {
          path: 'three',
          name: 'three',
          meta: { auth: true },
          component: resolve => require(['@/page/three'], resolve)
        },
        {
          path: 'admin',
          name: 'admin',
          meta: { auth: true },
          component: resolve => require(['@/page/admin'], resolve)
        },
        {
          path: 'sort/baoma/1',
          name: 'baomaone',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/1'], resolve)
        },
        {
          path: 'sort/baoma/2',
          name: 'baomatwo',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/2'], resolve)
        },
        {
          path: 'sort/baoma/3',
          name: 'baomathree',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/3'], resolve)
        },
        {
          path: 'sort/baoma/5',
          name: 'baomafive',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/5'], resolve)
        },
        {
          path: 'sort/baoma/7',
          name: 'baomaseven',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/7'], resolve)
        },
        {
          path: 'sort/baoma/X1',
          name: 'baomaX1',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X1'], resolve)
        },
        {
          path: 'sort/baoma/X2',
          name: 'baomaX2',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X2'], resolve)
        },
        {
          path: 'sort/baoma/X3',  
          name: 'baomaX3',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X3'], resolve)
        },
        {
          path: 'sort/baoma/X4',
          name: 'baomaX4',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X4'], resolve)
        },
        {
          path: 'sort/baoma/X5',
          name: 'baomaX5',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X5'], resolve)
        },
        {
          path: 'sort/baoma/X6',
          name: 'baomaX6',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X6'], resolve)
        },
        {
          path: 'sort/baoma/X7',
          name: 'baomaX7',
          meta: { auth: true },
          component: resolve => require(['@/sort/baoma/X7'], resolve)
        },
        {
          path: 'sort/benchi/a',
          name: 'benchia',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/a'], resolve)
        },
        {
          path: 'sort/benchi/ap',
          name: 'benchiap',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/ap'], resolve)
        },
        {
          path: 'sort/benchi/c',
          name: 'benchic',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/c'], resolve)
        },
        {
          path: 'sort/benchi/ca',
          name: 'benchica',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/ca'], resolve)
        },
        {
          path: 'sort/benchi/cs',
          name: 'benchics',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/cs'], resolve)
        },
        {
          path: 'sort/benchi/e',
          name: 'benchie',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/e'], resolve)
        },
        {
          path: 'sort/benchi/ga',
          name: 'benchiga',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/ga'], resolve)
        },
        {
          path: 'sort/benchi/gb',  
          name: 'benchigb',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/gb'], resolve)
        },
        {
          path: 'sort/benchi/gc',
          name: 'benchigc',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/gc'], resolve)
        },
        {
          path: 'sort/benchi/ge',
          name: 'benchige',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/ge'], resolve)
        },
        {
          path: 'sort/benchi/s',
          name: 'benchis',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/s'], resolve)
        },
        {
          path: 'sort/benchi/v',
          name: 'benchiv',
          meta: { auth: true },
          component: resolve => require(['@/sort/benchi/v'], resolve)
        },
        {
          path: 'sort/bentian/jd',
          name: 'bentianjd',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/jd'], resolve)
        },
        {
          path: 'sort/bentian/sy',
          name: 'bentiansy',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/sy'], resolve)
        },
        {
          path: 'sort/bentian/sr',
          name: 'bentiansr',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/sr'], resolve)
        },
        {
          path: 'sort/bentian/gr',
          name: 'bentiangr',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/gr'], resolve)
        },
        {
          path: 'sort/bentian/xy',
          name: 'bentianxy',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/xy'], resolve)
        },
        {
          path: 'sort/bentian/xrv',
          name: 'bentianxrv',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/xrv'], resolve)
        },
        {
          path: 'sort/bnetian/crv',
          name: 'bentiancrv',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/crv'], resolve)
        },
        {
          path: 'sort/bnetain/urv',  
          name: 'bentianurv',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/urv'], resolve)
        },
        {
          path: 'sort/bentian/fd',
          name: 'bentianfd',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/fd'], resolve)
        },
        {
          path: 'sort/bentian/ff',
          name: 'bentianff',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/ff'], resolve)
        },
        {
          path: 'sort/bentian/yg',
          name: 'bentianyg',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/yg'], resolve)
        },
        {
          path: 'sort/bentian/gd',
          name: 'bentiangd',
          meta: { auth: true },
          component: resolve => require(['@/sort/bentian/gd'], resolve)
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) { //权限判断
    if (localStorage.getItem('token')) { //读取token值
      //  成功
      next()
    } else {
      next({ path: '/' })
    }
  } else {
    // 没有meta.auth 不用管
    next()
  }
});

export default router;
