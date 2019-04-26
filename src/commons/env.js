/**
 * 环境变量
 * Created by yangxin on 2016/12/16.
 */

let env = process.env.NODE_ENV === 'development' ? require('../../config/dev.env') : require('../../config/prod.env')
Object.keys(env).forEach((key) => {
  env[key] = env[key].replace(new RegExp(/"/g), '')
})

export default env
