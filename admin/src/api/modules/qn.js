/**
 * Author：brand
 * Creation Time：2019-03-12 16:20
 * Email：brandhuang@qq.com
 */
import ax from '../axios'
const prefix = '/qiniu'
//
export function getQNToken () {
  return ax.get(prefix + '/getQNToken')
    .then(res => res.data)
    .catch(e => console.error(e))
}
//
export function uploadToQN (url,param) {
  return ax.post(url, param)
    .then(res => res.data)
    .catch(e => console.error(e))
}
