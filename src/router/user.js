const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

getCookieExpires = () => {
  const d = new Date()
  // this.apply.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  // console.log('sss')
}
const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if (method === 'GET' && req.path === '/api/user/login') {
    const { username, password } = req.query
    // const { username, password } = req.body
    const result = login(username, password)
    return result.then(data => {
      if (data.username) {
        // 操作cookie
        res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly`)
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }
  if (method === 'GET' && req.path === '/api/user/login-test') {
    if (req.cookie.username) {
      return Promise.resolve(new SuccessModel({
        username: req.cookie.username
      }))
    }
    return Promise.resolve(new ErrorModel('没有登录'))
  }
}

module.exports = handleUserRouter;
