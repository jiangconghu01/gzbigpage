import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams } from '../../utils/commFun'
import store from '../../store/index'
// import { encodeUrl } from '../static'

//取图形的指标接口，图形编码从上到下，从左到右
const getEncode = '/channelBigScreen/modInfoList'
//取指标值的接口
const encodeUrl = '/channelBigScreen/modIdxVOList'
//请求和返回值类型，err统一类型后端暂未定义
interface ResData {
  chartCode: string
  idxCde: string
  rptType: string
  accountCode: string
  periodDate: string
  idxValue?: string
  idxName?: string
  idxOrd?: string
}
type Prama = ResData[]

//left-top图表请求数据逻辑
function handleLeftTopChart(resData: AxiosResponse<ResData[]>) {
  const config = pageChartsConfig.providerAllView.child['all-view-left-top']
  config.series[0].data = [
    {
      value: 7.59,
      name: 'xxx'
    },
    {
      value: 2.41,
      name: 'xx'
    },
    {
      value: 0,
      name: 'eee'
    }
  ]
  console.log(resData)
}

//全局统一参数
const date = store.state.selectDate
const citycode = store.state.cityCode
const businesstype = store.state.buniessType

//统一请求函数
const updateProviderAllView = async (_this: Record<string, any>) => {
  //图1用原来接口，先请求该图对应指标
  const pageAllviewEncode = await requestPostData(getEncode, { viewCode: '9', chnlType: '0000' })
  //left-bottom图表请求数据逻辑
  const leftTopParam = []
  const leffTop = requestPostData<Prama, ResData[], any>(encodeUrl, [])
  //left-bottom图表请求数据逻辑
  const leffBottom = requestPostData<Prama, ResData[], any>(encodeUrl, [])

  //请求实际数据的promise数组
  const reqArr = [leffTop, leffBottom]
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

export { updateProviderAllView }
