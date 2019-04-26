/**
 * 应用常量
 * Created by yangxin on 2016/11/25.
 */
export const API_TOKEN = 'api_token' //  接口API_TOKEN
export const CHANNEL = 'channel' //  渠道
export const SIGN_SECURITY_KEY = '58jijian' // 参数签名密钥
export const PARAM_SIGN_NAME = 'sign' // 答名参数名

export const ENV_PRODUCTION = 'production' // 生产环境
export const HIDE_LOADING_FLAG = 'HIDE_LOADING_FLAG'

// 分页全局常量
export const DEFAULT_PAGE_NO = '0'
export const DEFAULT_PAGE_SIZE = 20

// 服务器公共响应码
export const REQUEST_SUCCESS = 200 // 请求成功
export const REQUEST_API_TOKEN_INVALID = 2001 // token失效
export const REQUEST_LOGIN_FAILURE = 1006 // 登录失败，会话超时

// 对话框
export const DIALOG_BTN_CONFIRM = '确认'
export const DIALOG_BTN_CANCEL = '取消'

export const MAX_UPLOAD_FILE_SIZE = 1024 * 1024 * 5 // 文件上传大小限制
// 短信验证码时间
export const SMS_COUNT_DOWN = 120
// 性别
export const SEX_MAN = 1
export const SEX_WOMAN = 2
export const SEX = {}
SEX[SEX_MAN] = '男'
SEX[SEX_WOMAN] = '女'
// 页面title
export const APP_TITLE = '急速在线'

// -------------------事件名称------------------
export const EVENT_LOGIN_TIMEOUT = 'EVENT_LOGIN_TIMEOUT' // 退出登录
export const EVENT_WECHAT_INIT_SUCCESS = 'EVENT_WECHAT_INIT_SUCCESS'

// -------------存储在localStorage中的Key---------
export const CACHE_USER_INFO = 'CACHE_USER_INFO' // 用户信息
export const CACHE_API_TOKEN = 'CACHE_API_TOKEN' // API TOKEN
export const CACHE_APPLY_ID = 'CACHE_APPLY_ID' // APPLY_ID
export const PRODUCT_CODE_CREDIT_CARD = 'PRODUCT_CODE_CREDIT_CARD' // 产品类型

// -------------------事件名称------------------
export const EVENT_API_TOKEN_INVALID = 'EVENT_API_TOKEN_INVALID' // 退出登录成功

// 默认图片
export const DEFAULT_AVATAR = require('./assets/logo.png')
// 下拉刷新图标回弹延迟时间(毫秒)
export const PULL_COMPLETE_DELAY = 800
export const DELAY_LOAD_LIST_DATA = 350 // 延迟加载列表数据（毫秒）
