import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

import storage from '@/commons/storage'
import * as types from '@/store/mutation-types'
import * as actions from '@/store/actions'
import * as constants from '@/AppConstants'

Vue.use(Vuex)

// global state
const state = {
  isTip: false,
  isManualCloseLoading: false,
  tipText: '默认提示信息',
  enterAnimate: '',
  leaveAnimate: '',
  isBack: false,
  channel: '40001',
  applicationSourceNo: '0.9.0.0',
  userInfo: {},
  api_token: '',
  weChatInitd: false
}

const mutations = {
  [types.UPDATE_TIP] (state, tipText) {
    state.isTip = !!tipText
    if (state.isTip) {
      state.tipText = tipText
    }
  },
  [types.UPDATE_MANUAL_CLOSE_LOADING] (state, isManualCloseLoading) {
    state.isManualCloseLoading = isManualCloseLoading
  },
  [types.UPDATE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo || {}
    storage.setItem(constants.CACHE_USER_INFO, state.userInfo)
  },
  [types.UPDATE_API_TOKEN] (state, apiToken) {
    state.api_token = apiToken || ''
    storage.setItem(constants.CACHE_API_TOKEN, state.token)
  },
  [types.UPDATE_WECHAT_INITD_STATUS] (state, status) {
    state.weChatInitd = status
  },
  [types.UPDATE_BACK_STATUS] (state, trueOrFalse) {
    state.isBack = trueOrFalse
  },
  [types.UPDATE_CHANNEL] (state, channel) { // 更新渠道
    state.channel = channel
  },
  [types.SET_PAGE_ANIMATE_TYPE] (state, type) {
    switch (type) {
      case 'back':
        state.enterAnimate = 'fadeInLeft'
        state.leaveAnimate = 'fadeOutRight'
        break
      case 'forward':
        state.enterAnimate = 'fadeInRight'
        state.leaveAnimate = 'fadeOutLeft'
        break
      case 'tab':
        state.enterAnimate = 'fadeIn'
        state.leaveAnimate = 'fadeOut'
        break
      default:
        state.enterAnimate = 'fadeIn'
        state.leaveAnimate = 'fadeOut'
    }
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    i18n: vuexI18n.store
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
