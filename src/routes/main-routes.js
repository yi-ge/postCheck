import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // HOME 路由
  .all('/upload', controllers.upload.default)
  .get('/api/study/get', controllers.study.get)
  .post('/api/study/post', controllers.study.post)
  .del('/api/study/del', controllers.study.del)
  .put('/api/study/put', controllers.study.put)

module.exports = router
