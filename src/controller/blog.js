const getList = (author, keyword) => {
  // 返回假数据
  return [
    {
      id: 1,
      title: 'title1',
      content: 'content1',
      createTime: 1571748568705,
      author: 'zhy'
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      createTime: 1571748587652,
      author: 'zhy'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 2,
    title: 'title2',
    content: 'content2',
    createTime: 1571748587652,
    author: 'zhy'
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
