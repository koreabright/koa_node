const router = require('koa-router')()

router.get('/api/login', ctx => {
  let json = {
    code: 0,
    info: {

    },
    msg: "通过了"
  };
  ctx.type = 'json';
	ctx.body = JSON.stringify(json);
});

router.get('/', async (ctx, next) => {
  await ctx.render('layout', {
    title: '这是第一个, 哈哈',
    pagename: 'index'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
