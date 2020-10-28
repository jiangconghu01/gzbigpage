import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams } from '../../utils/commFun'
import store from '../../store/index'
import { encodeUrl } from '../static'
//请求和返回值类型，err统一类型后端暂未定义
interface ResData {
  accountCode: string
  bilMonth: string
  indexCode: string
  indexVlue: string
}
interface Prama {
  paramArrs: string
}

//全局统一参数
const date = store.state.selectDate
const citycode = store.state.cityCode
const businesstype = store.state.buniessType
//left-top图表请求数据逻辑
const leftTopParam = { paramArrs: '' }
const leffTop = requestPostData<Prama, ResData, any>(encodeUrl, { paramArrs: '202008,A3301,NHDP0114],[202008,A3301,NHDP0115],[202008,A3301,NHDP0117]' })
function handleLeftTopChart(resData: AxiosResponse<ResData>) {
  let config = pageChartsConfig.providerDetailView.child['detail-view-top-left']
  config = {}
  console.log(resData)
}

//left-bottom图表请求数据逻辑
const leffBottom = requestPostData<Prama, ResData, any>(encodeUrl, { paramArrs: '202007,A3301,NHDP0114],[202007,A3301,NHDP0115],[202007,A3301,NHDP0117]' })

const reqArr = [leffTop, leffBottom]
export default function updateProviderDetailView(_this: Record<string, any>) {
  Promise.all(reqArr)
    .then(([resLeffTop, resLeffBottom]) => {
      _this.$message.success('数据加载成功！')
      handleLeftTopChart(resLeffTop)
    })
    .catch((err) => {
      _this.$message.error(err)
      _this.$message.error('数据加载失败,请刷新重试！')
      console.log(err)
    })
    .finally(() => {
      store.commit('setIsLoading', false)
    })
}
