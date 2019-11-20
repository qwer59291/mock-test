import { LoginUsers, User } from './data/user.js'
import Mock from 'mockjs'

export default {
  
  bootstrap() {

    const domain = 'http://mockjs.com/api'

    Mock.mock(`${domain}/posts`, 'get', User);

    Mock.mock(`${domain}/login`, 'post', LoginUsers)
  }
}