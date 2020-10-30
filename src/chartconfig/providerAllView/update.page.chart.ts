import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams } from '../../utils/commFun'
import store from '../../store/index'
import { inintChartsUpdate } from '../installchart'
// import { encodeUrl } from '../static'

//取图形的指标接口，图形编码从上到下，从左到右
const getEncode = '/channelBigScreen/modInfoList'
//取指标值的接口
const encodeUrl = '/channelBigScreen/modIdxVOList'
//请求和返回值类型，err统一类型后端暂未定义
//指标返回类型
interface EncodeType {
  chartCode: string
  idxCde: string
  idxOrd: string
}
interface ViewEEncodeRes {
  viewCode: string
  chnlType: string
  chartCode: string
  chartOrd: string
  idxs: EncodeType[]
}
//指标值返回类型
interface ResponseBody {
  code?: number | string | null
  data: ResData[]
}
interface ResData {
  chartCode: string
  idxCde: string
  rptType?: string
  accountCode: string
  periodDate: string
  idxValue?: string
  idxName?: string
  idxOrd?: string
}
type Prama = ResData[]
const typeMap: Record<string, string> = {
  all: '00',
  asset: '01',
  cost: '02',
  income: '03',
  other: '04'
}
//left-top图表请求数据逻辑
function handleLeftTopChart(resData: AxiosResponse<ResponseBody>, pageAllviewEncode: ViewEEncodeRes[]) {
  const config = pageChartsConfig.providerAllView.child['all-view-left-top']
  const label = ['成本类', '工程采购类', '合作分成类', '其他']
  config.series[0].data = resData.data.data.map((val: ResData, index) => {
    return {
      name: label[index],
      value: val.idxValue
    }
  })
}
//top-all总体指标
function handleLeftTopAll(resData: AxiosResponse<ResponseBody>, pageAllviewEncode: ViewEEncodeRes[]) {
  const data: Record<string, any>[] = resData.data.data
  store.commit('setAllviewItems', data)
  //   console.log(resData.data.data)
}

//统一请求函数
const updateProviderAllView = async (_this: Record<string, any>) => {
  //全局统一参数
  // const date = store.state.selectDate
  const date = '2020-07'
  const citycode = store.state.cityCode
  const businesstype = store.state.buniessType

  try {
    //图1用原来接口，先请求该图对应指标
    const pageAllviewEncode = await requestPostData<Record<string, string>, { data: ViewEEncodeRes[] }, unknown>(getEncode, { viewCode: '2001', chnlType: typeMap[businesstype] })
    //left-top图表请求数据逻辑
    const encondelefttop = pageAllviewEncode.data.data[0].idxs.map((ele: EncodeType) => ele.idxCde)
    const chartCode = pageAllviewEncode.data.data[0].chartCode
    const paramLeftTop = JSON.parse(getDatesParams([date], [citycode], encondelefttop, businesstype, chartCode))
    const leffTop = requestPostData<Prama, ResponseBody, unknown>(encodeUrl, paramLeftTop)

    //中间总体指标
    const encondetopall = pageAllviewEncode.data.data[1].idxs.map((ele: EncodeType) => ele.idxCde)
    const chartCodeTopAll = pageAllviewEncode.data.data[1].chartCode
    const paramTopAll = JSON.parse(getDatesParams([date], [citycode], encondetopall, businesstype, chartCodeTopAll))
    const topAll = requestPostData<Prama, ResponseBody, unknown>(encodeUrl, paramTopAll)

    //right-top图表请求数据逻辑
    const rightParam: Prama = []
    const rightTopPro = requestPostData<Prama, ResponseBody, unknown>(encodeUrl, rightParam)

    //请求实际数据的promise数组
    const reqArr = [leffTop, topAll]
    Promise.all(reqArr)
      .then(([resLeffTop, topAll]) => {
        _this.$message.success('数据加载成功！')
        handleLeftTopChart(resLeffTop, pageAllviewEncode.data.data)
        handleLeftTopAll(topAll, pageAllviewEncode.data.data)
        setTimeout(() => {
          inintChartsUpdate('providerAllView')
        }, 0)
      })
      .catch((err) => {
        _this.$message.error('指标数据加载失败,请刷新重试！')
        console.log(err)
      })
      .finally(() => {
        store.commit('setIsLoading', false)
      })
  } catch (error) {
    _this.$message.error('指标加载失败,请刷新重试！')
  }
}
//重点页面饼图加载，采用老的指标取值方式，所以写在第一个页面
function updatePage2PieData() {
  const date = '2020-07'
  const citycode = store.state.cityCode
  const businesstype = store.state.buniessType
  requestPostData<Record<string, string>, { data: ViewEEncodeRes[] }, unknown>(getEncode, { viewCode: '2002', chnlType: typeMap[businesstype] }).then((res) => {
    const update2pie = res.data.data[0].idxs.map((ele: EncodeType) => ele.idxCde)
    const chartCode = res.data.data[0].chartCode
    const update2pieParam = JSON.parse(getDatesParams([date], [citycode], update2pie, businesstype, chartCode))
    requestPostData<Prama, ResponseBody, unknown>(encodeUrl, update2pieParam).then((resData) => {
      const config = pageChartsConfig.providerKeypointView.child['keypoint-view-bottom-left']
      const label = ['房地产', '汽车', '通讯设备', '土木工程', '软件和技术服务', '批发']
      config.series[0].data = resData.data.data.map((val: ResData, index) => {
        return {
          name: label[index],
          value: val.idxValue
        }
      })
    })
  })
}
export { updateProviderAllView, updatePage2PieData }
