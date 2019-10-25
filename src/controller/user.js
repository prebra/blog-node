const loginCheck = (username, password) => {
  if (username === 'zhy' && password === '123') {
    return true
  }
  return false
}

module.exports = {
  loginCheck
}