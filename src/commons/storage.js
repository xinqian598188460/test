/**
 * 本地存储抽象，方便日后统一优化
 * Created by yangxin on 2017/3/27.
 */

const setItem = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = function (key) {
  let value = localStorage.getItem(key)
  if (value == null || value === undefined || value === 'undefined') {
    return ''
  }
  return JSON.parse(value)
}

const removeItem = function (key) {
  if (!key) {
    return
  }
  localStorage.removeItem(key)
}

const clearAll = function () {
  localStorage.clear()
}

export default {
  setItem,
  getItem,
  removeItem,
  clearAll
}
