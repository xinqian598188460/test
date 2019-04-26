/**
 * Created by yangxin on 2016/11/23.
 */
let routes = [
  {
    path: '/question',
    component: resolve => {
      require(['pages/question'], resolve)
    },
    meta: {
      title: '问卷'
    }
  },
  {
    path: '/card-details',
    component: resolve => {
      require(['pages/card-details'], resolve)
    },
    meta: {
      title: '名片'
    }
  },
  {
    path: '/card-details-qs',
    component: resolve => {
      require(['pages/card-details-qs'], resolve)
    },
    meta: {
      title: '名片详情'
    }
  }
]

export default routes
