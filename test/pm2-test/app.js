const http = require('http')

const PORT = 8000

const server = http.createServer((req, res) => {
  // 日志
  console.log('cur time')
  console.error('error')
  res.setHeader('Content-type', 'application-json')
  res.end(
    JSON.stringify({
      errno: 0,
      msg: 'mp2 test server 2'
    })
  )
})
server.listen(PORT)
console.log('server is listening on port 8000...')