/**
 * 获取url中参数
 * @returns {Object} 将url参数用键值对的方式存储
 */
// eslint-disable-next-line no-unused-vars
var getUrlParams = function (url) {
  url = url || window.location.href // 获取url中"?"符后的字串
  if (url.indexOf('#') !== -1) {
    url = url.split('#')[1]
  }
  // eslint-disable-next-line no-new-object
  let params = new Object()
  if (url.indexOf('?') !== -1) {
    let strs = url.substr(url.indexOf('?') + 1).split('&')
    for (var i = 0; i < strs.length; i++) {
      params[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1])
    }
  }
  return params
}

// axios.defaults.baseURL = 'http://47.103.64.23:8088/yidiApi/';

axios.defaults.baseURL = '/yidiApi/'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1NyIsIllJRElyYW5kb21LZXlZSURJIjoieTB0bTdhIiwiZXhwIjoxNTU0MTMyMTMyLCJpYXQiOjE1NTM1MjczMzJ9.8mwgFZ_dvN42B-Y4oEGD1ghCVkgKz21GAOF5xkZu5mHLjEWCaK15ydZC7GG-APBAtp4N2j6CfOGGJ3PBUYJFgQ'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 响应拦截
axios.interceptors.response.use(function (resp) {
  return resp.data
}, function (error) {
  console.warn('request error: ', error)

  return Promise.reject(message)
})
