// 引入axios
import axios from 'axios'

/**
 * 获取验证码  登录注册都一样
 * POST请求
 */
export const getTestcode = (data) => {
  return axios({

    url: 'https://user.myfcomic.com/api/gethverify?client_version=1.0.10',
    method: 'POST',
    data: data
  })
}

/**
 * 发送验证码进行对比
 * POST
 */
export const sendTestcode = (data) => {
  return axios({

    url: 'https://user.myfcomic.com/api/verifylogin?client_version=1.0.10',
    method: 'POST',
    data: data
  })
}

/**
 * 账号密码登录
 * POST
 */
export const pasLogin = (data) => {
  return axios({
    url: 'https://user.myfcomic.com/api/login?client_version=1.0.10',
    method: 'POST',
    data: data
  })
}
