const redis = require('redis')

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1')
redisClient.on('error', err => {
  console.error(err)
})

// test
redisClient.set('myName', 'hengying', redis.print)
redisClient.get('myName', (err, val) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('val', val)
  // exit
  redisClient.quit()
})