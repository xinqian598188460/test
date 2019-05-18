/**
 * Created by xinqian on 2019/05/18.
 */
import paperInfo from '../components/paperInfo/PaperInfo'
import echarts from '../components/echarts/echarts'

let routes = [
  {
    path: '/paper',
    component: paperInfo,
    meta: {
      title: '添加问卷'
    }
  }, {
    path: '/echarts',
    component: echarts,
    meta: {
      title: '分析'
    }
  }
]

export default routes
