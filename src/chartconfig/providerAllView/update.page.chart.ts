import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams } from '../../utils/commFun'

interface ResData {
  accountCode: string
  bilMonth: string
  indexCode: string
  indexVlue: string
}
interface Prama {
  paramArrs: string
}
//err统一类型后端暂未定义
//left-top图表请求数据逻辑
const leftTopParam = { paramArrs: '' }
const leffTop = requestPostData<Prama, ResData, any>('/czxt/pages/wjhx/getIdWjhxParm.do', { paramArrs: '202008,A3301,NHDP0114],[202008,A3301,NHDP0115],[202008,A3301,NHDP0117]' })
function handleLeftTopChart(resData: AxiosResponse<ResData>) {
  let config = pageChartsConfig.providerAllView.child['all-view-left-top']
  config = {}
  console.log(resData)
}

//left-bottom图表请求数据逻辑
const leffBottom = requestPostData<Prama, ResData, any>('/czxt/pages/wjhx/getIdWjhxParm.do', { paramArrs: '202007,A3301,NHDP0114],[202007,A3301,NHDP0115],[202007,A3301,NHDP0117]' })

const reqArr = [leffTop, leffBottom]
export default function updateProviderAllView(_this: Record<string, any>) {
  Promise.all(reqArr)
    .then(([resLeffTop, resLeffBottom]) => {
      _this.$message.success('This is an success message')
      handleLeftTopChart(resLeffTop)
    })
    .catch((err) => {
      _this.$message.error(err)
      _this.$message.error('数据加载失败,请刷新重试！')
      console.log(err)
    })
}
