/**
 * Created by yangxin on 2016/11/29.
 */
import uaParser from 'ua-parser-js' // 客户端浏览器信息解析模块
import md5 from 'js-md5'
import * as constants from '../AppConstants'
import storage from './storage'

/**
 * API接口参数签名
 * @param  {[Object]} params [请求参数]
 * @return {[String]}        [参数签名字符串]
 */
const getSign = function (params) {
  let paramMap = new Map()
  for (let key in params) {
    if (key === constants.PARAM_SIGN_NAME) {
      continue
    }
    let value = params[key]
    if (value == null || value === undefined) {
      value = ''
      params[key] = ''
    }

    if (value instanceof File) {
      continue
    }

    paramMap.set(key, value)
  }

  if (paramMap.size < 1) {
    return null
  }

  let str = ''

  // 1、排序
  let orderParamMap = new Map([...paramMap.entries()].sort())
  // 2、用&符号拼接
  for (let [key, value] of orderParamMap) {
    str += `${key}=${value}&`
  }
  str += constants.SIGN_SECURITY_KEY // 最后拼接加密密钥
  // 3、签名
  let sign = md5(str)
  return sign
}

// 获取当前客户端所处的渠道
const getChannel = function () {
  if (isWeChat()) {
    return '1' // 微信
  } else {
    return '5' // H5/PC
  }
}

/**
 * 当前浏览器是否微信客户端
 * @returns {boolean} 微信客户端返回true，否则返回false
 */
const isWeChat = function () {
  let ua = uaParser(navigator.userAgent)
  let browserName = ua.browser.name
  return browserName === 'WeChat'
}

/**
 * 是否IOS客户端
 * @returns {boolean}
 */
const isIOS = function () {
  let ua = uaParser(navigator.userAgent)
  return ua.os.name === 'iOS'
}
/**
* 判断微信浏览器版本号是否大于6.6.5
* * @returns {boolean}
*/
const WeChatVersion = function () {
  let wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\\.]+)/i)[1].slice(0, 5)
  if (wechatInfo > '6.6.5') {
    return false
  } else {
    return true
  }
}

/**
* 判断是否是微信内置浏览器
* * @returns {boolean} 微信内置浏览器返回true，否则返回false
*/
const isWeixinBrowser = function () {
  let agent = navigator.userAgent.toLowerCase()
  if (agent.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

const isNotNull = function (value) {
  return value != null && value !== undefined && value !== '' && value !== false
}

/**
 * 是否登录
 * @returns {boolean}
 */
const isLogin = function () {
  let userInfo = storage.getItem(constants.CACHE_USER_INFO)
  return userInfo && isNotNull(userInfo.uuid) && isNotNull(userInfo.userId)
}
// const isLogin = function() {
//     let token = storage.getItem(constants.CACHE_API_TOKEN)
//     let userInfo = storage.getItem(constants.CACHE_USER_INFO)
//     return token && token.length == 36 && userInfo
// }

/**
 * 重置对象所有属性默认值
 * @param object
 */
const resetObject = function (object) {
  if (!object && typeof (object) !== 'object') {
    return
  }

  for (let prop in object) {
    let value = object[prop]
    if (typeof (value) === 'string') {
      object[prop] = ''
    } else if (Array.isArray(value)) {
      object[prop].splice(0, object[prop].length)
    } else if (typeof (value) === 'number') {
      object[prop] = 0
    } else if (typeof (value) === 'boolean') {
      object[prop] = false
    } else if (typeof (value) === 'object') {
      resetObject(value)
    } else {
      object[prop] = null
    }
  }
}

const formDataToObject = function (formData, excludeFile) {
  if (!(formData instanceof FormData)) {
    return null
  }
  let obj = {}
  for (let entrie of formData.entries()) {
    let key = entrie[0]
    let value = entrie[1]
    if (excludeFile && value instanceof File) {
      continue
    }
    obj[key] = value
  }
  return obj
}

/**
 * 调用函数
 * @param fun 函数引用
 * @param args 函数参数
 */
const callFun = function (fun, ...args) {
  fun && typeof (fun) === 'function' && fun(...args)
}
/**
 * 获取url中参数
 * @returns {Object} 将url参数用键值对的方式存储
 */
const getUrlParams = function (url) {
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
/**
 *
 * 设置每个页面的 title
 */
const title = function (title) {
  let t = title ? ` ${title}` : constants.APP_TITLE
  window.document.title = t
}

/**
 *
 * 数据上报
 */
const shangbao = function (params) {
  let dTime = new Date().getTime()
  let ua = navigator.userAgent.toLowerCase()
  let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1 // android终端
  params.params['time'] = dTime
  params.params['client'] = isAndroid ? 'android' : 'ios'

  // axios.get('/trace', params).then(() => {
  // }).catch(() => {
  // })
}

export default {
  isWeChat,
  getSign,
  getChannel,
  WeChatVersion,
  isWeixinBrowser,
  resetObject,
  callFun,
  isLogin,
  formDataToObject,
  isIOS,
  getUrlParams,
  title,
  shangbao
}
