// 专门用来处理获取动漫的接口请求

// 引入axios
import axios from 'axios'

/**
 * 主页获取主页banner图的接口请求
 */
export const getBanner = () => {
  return axios({
    url: ' https://codetest.myfcomic.com/api/comic/choice?client_version=1.0.10&position_id=1&page=&size=&platform=3',
    method: 'GET'
  })
}

/**
 * 主页获取主页日漫的接口请求
 */
export const getJpcartoon = () => {
  return axios({
    url: ' https://codetest.myfcomic.com/api/comic/choice?client_version=1.0.10&position_id=17&page=1&size=4&platform=3',
    method: 'GET'
  })
}

/**
 * 主页获取主页国漫的接口请求
 */
export const getCncartoon = () => {
  return axios({
    url: ' https://codetest.myfcomic.com/api/comic/choice?client_version=1.0.10&position_id=18&page=1&size=4&platform=3',
    method: 'GET'
  })
}

/**
 * 日漫列表页 获取漫画数据
 */
export const getComic = () => {
  return axios({
    url: 'https://codetest.myfcomic.com/api/comic/region?client_version=1.0.10&region=1&page=1&platform=3',
    method: 'GET'
  })
}

/**
 *国漫列表页 获取漫画数据
 */
export const getCncomic = () => {
  return axios({
    url: 'https://codetest.myfcomic.com/api/comic/region?client_version=1.0.10&region=4&page=1&platform=3',
    method: 'GET'
  })
}

/**
 *专题列表页 获取漫画数据
 * 可以根据 页数不同获取更多数据
 */
export const specialCartoon = () => {
  return axios({
    url: 'https://codetest.myfcomic.com/api/topic/list?client_version=1.0.10&page=1&platform=3',
    method: 'GET'
  })
}

/**
 *资讯列表页面
 */
export const inforCartoon = () => {
  return axios({
    url: 'https://codetest.myfcomic.com/api/comic/informations?page=1&client_version=1.0.10&platform=3',
    method: 'GET'
  })
}

/**
 *搜索列表页面 热门搜索数据
 */
export const hotSearch = () => {
  return axios({
    url: 'https://codetest.myfcomic.com/api/search/hot?page=1&client_version=1.0.10&platform=3',
    method: 'GET'
  })
}

/**
 * 搜索列表 点击搜索请求数据
 */
export const searchRes = (val) => {
  return axios({
    url: 'https://pay.myfcomic.com/api/search?page=1&platform=3&client_version=1.0.10',
    method: 'GET',
    params: {
      text: val
    }
  })
}
