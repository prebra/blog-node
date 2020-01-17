const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('请求开始。。。', req.method, req.url)
  next()
})

app.use((req, res, next) => {
  // 假设在处理cookie
  req.cookies = {
    userid: '123'
  }
  next()
})

app.use((req, res, next) => {
  // 假设处理postdata
  // 异步
  setTimeout(() => {
    req.body = {
      a: 1,
      b: 2
    }
    next()
  })
})

app.use('/api', (req, res, next) => {
  console.log('处理/api路由')
  next()
})

app.get('/api', (req, res, next) => {
  console.log('get/api路由')
  next()
})

app.post('/api', (req, res, next) => {
  console.log('post/api路由')
  next()
})

app.get('/api/get-cookie', (req, res, next) => {
  console.log('get /api/get-cookie')
  res.json({
    errno: 0,
    data: req.cookie
  })
})

app.post('/api/get-post-data', (req, res, next) => {
  console.log('get /api/get-post-data')
  res.json({
    errno: 0,
    data: req.body
  })
})

app.use((req, res, next) => {
  console.log('处理404')
  res.json({
    errno: -1,
    data: '404'
  })
})

app.listen(8000, () => {
  console.log('server running on port 8000')
})