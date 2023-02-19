const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = {
    code:200,
    msg:'用户信息，【请求成功】'
  }
})

router.post('/', function (ctx, next) {
  ctx.body = {
    code:200,
    token:'A123232d2232323',
    msg:'登陆成功'
  }
})

router.put('/', function (ctx, next) {
  ctx.status = 201
})

router.delete('/', function (ctx, next) {
  ctx.status = 204
})



module.exports = router
