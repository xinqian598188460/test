import * as types from './mutation-types'

/**
 * 显示/隐藏提示框
 * @param commit
 * @param tip 提示内容，如果是false，隐藏提示框，否则显示提示框，提示文本为tip
 */
export function showToast ({commit}, tip) {
  commit(types.UPDATE_TIP, tip)
}

/**
 * 更新Header
 * @param getters
 * @param commit
 * @param header    头部配置信息
 */
export function updateHeader ({getters, commit}, header) {
  if (!header || typeof (header) !== 'object') {
    throw new Error('无效的header配置')
  }
  commit(types.UPDATE_HEADER, Object.assign({}, getters.header, header))
}

/**
 * 更新Footer
 * @param getters
 * @param commit
 * @param footer    底部配置信息
 */
export function updateFooter ({getters, commit}, footer) {
  if (!footer || typeof (footer) !== 'object') {
    throw new Error('无效的footer配置')
  }
  commit(types.UPDATE_FOOTER, Object.assign({}, getters.footer, footer))
}
