import { tmpdata } from '../models/data'

let datas = async function (type) {
  return tmpdata.findAll({
    where: {
      type: type
    },
    order: '`ID` DESC'
  })
}

export let get = async function (ctx) {
  await tmpdata.create({
    name: ctx.query.name,
    type: 'get',
    data: ctx.query.data
  })
  ctx.body = {
    status: 1,
    result: {
      name: ctx.query.name,
      type: 'get',
      data: ctx.query.data,
      other: {
        info: '已经成功的同学(时间脑补+8h):',
        list: await datas('get')
      }
    }
  }
}

export let post = async function (ctx) {
  await tmpdata.create({
    name: ctx.request.body.name,
    type: 'post',
    data: ctx.request.body.data
  })
  ctx.body = {
    status: 1,
    result: {
      name: ctx.request.body.name,
      type: 'post',
      data: ctx.request.body.data,
      other: {
        info: '已经成功的同学(时间脑补+8h):',
        list: await datas('post')
      }
    }
  }
}

export let put = async function (ctx) {
  await tmpdata.create({
    name: ctx.request.body.name,
    type: 'put',
    data: ctx.request.body.data
  })
  ctx.body = {
    status: 1,
    result: {
      name: ctx.request.body.name,
      type: 'put',
      data: ctx.request.body.data,
      other: {
        info: '已经成功的同学(时间脑补+8h):',
        list: await datas('put')
      }
    }
  }
}

export let del = async function (ctx) {
  await tmpdata.create({
    name: ctx.request.body.name,
    type: 'delete',
    data: ctx.request.body.data
  })
  ctx.body = {
    status: 1,
    result: {
      name: ctx.request.body.name,
      type: 'delete',
      data: ctx.request.body.data,
      other: {
        info: '已经成功的同学(时间脑补+8h):',
        list: await datas('delete')
      }
    }
  }
}
