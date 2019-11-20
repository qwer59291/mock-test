import Mock from 'mockjs'

const Random = Mock.Random

const LoginUsers = {
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
};

const User = Mock.mock({
  'list|1-100': [{
    'id|+1': 1,
    'name': '@cname',
    'src': Random.dataImage('300x250', 'mock的图片')
  }]
})



export { LoginUsers, User }