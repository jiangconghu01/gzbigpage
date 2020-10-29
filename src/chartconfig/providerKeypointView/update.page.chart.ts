import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams, getDatesParamsNew } from '../../utils/commFun'
import store from '../../store/index'
import { inintChartsUpdate } from '../installchart'
// import { encodeUrl } from '../static'
//取供应商接口
const getProvider = '/bigScreen/guiz/supplierIndexData/supplierList'
//取图形的指标接口，图形编码从上到下，从左到右0101，0102（总览图：01，重点图：02，详情图：03）
const getEncode = '/bigScreen/guiz/supplierIndexData/indexGroups'
//取指标值的接口
const encodeUrl = '/bigScreen/guiz/supplierIndexData/indexValues'
//请求和返回值类型，err统一类型后端暂未定义
// interface ProviderRes { //供应商返回类型
//     accountCode: string
//     monthId: string
//     ywlx: string
//     xh: string
//     gysbm: string
//     gysmc: string
//   }
//   interface encodeRes { //指标返回类型
//     idxGroup: string
//     idxCde: string
//     idxName: string
//     xh: string
//   }
interface ResData {
  accountCode: string
  monthId: string
  ywlx: string
  gysbm: string
  idxCde?: string
  idxCode?: string
  gysmc?: string
  idxValue?: string
  xh?: string
  idxName?: string
}
type Prama = ResData[]

//left-top 图表的数据更新逻辑
function handleLeftTopChart(resData: AxiosResponse<ResData[]>, providerList: any, encodeList: any) {
  const providerListRqu: any = providerList.data.data.map((ele: any) => ele.gysmc)
  const config = pageChartsConfig.providerKeypointView.child['keypoint-view-top-left']
  //纵坐标数据
  config.yAxis.data = providerListRqu
  debugger
  //列账金额
  const series1: any = resData.data
  const series1Data = series1.data.filter((val: any) => val.idxCode === 'ZDGYS_0001')
  config.series[0].data = series1Data.map((val: any) => {
    val.name = val.gysmc
    val.value = val.idxValue
    return val
  })
  debugger
  const series2: any = resData.data
  const series2Data = series2.data.filter((val: any) => val.idxCode === 'ZDGYS_0002')
  config.series[1].data = series2Data.map((val: any) => {
    val.name = val.gysmc
    val.value = val.idxValue
    return val
  })
  const series3: any = resData.data
  const series3Data = series3.data.filter((val: any) => val.idxCode === 'ZDGYS_0003')
  config.series[2].data = series3Data.map((val: any) => {
    val.name = val.gysmc
    val.value = val.idxValue
    return val
  })
  //纵坐标对应的serice数据
}

function handleAllDataRequest(_this: Record<string, any>, reqArr: Promise<AxiosResponse<ResData[]>>[], providerList: any, encodeList: Record<string, any>) {
  Promise.all(reqArr)
    .then(([resLeffTop, resLeffBottom]) => {
      _this.$message.success('数据加载成功！')
      handleLeftTopChart(resLeffTop, providerList, encodeList)
      setTimeout(() => {
        inintChartsUpdate('providerKeypointView')
      }, 0)
    })
    .catch((err) => {
      _this.$message.error(err)
      _this.$message.error('指标数据加载失败,请刷新重试！')
      console.log(err)
    })
    .finally(() => {
      store.commit('setIsLoading', false)
    })
}
//全局统一参数
// const date = store.state.selectDate
const date = '202007'
const citycode = store.state.cityCode
const businesstype = store.state.buniessType

const updateProviderKeypointView = async (_this: Record<string, any>) => {
  let providerList: AxiosResponse<ResData[]>

  try {
    //请求供应商编码和名称
    providerList = await requestPostData<Record<string, string>, ResData[], unknown>(getProvider, { accountCode: citycode, monthId: date, ywlx: businesstype })
  } catch (error) {
    _this.$message.error('供应商编码加载失败,请刷新重试！')
  }
  //获取该页面所有图表的指标编码

  Promise.all([
    requestPostData<{ idxGroup: string }, ResData[], unknown>(getEncode, { idxGroup: '0201' }),
    requestPostData<{ idxGroup: string }, ResData[], unknown>(getEncode, { idxGroup: '0202' })
    // requestPostData<{ idxGroup: string }, ResData[], unknown>(getEncode, { idxGroup: '0203' }),
    // requestPostData<{ idxGroup: string }, ResData[], unknown>(getEncode, { idxGroup: '0204' }),
    // requestPostData<{ idxGroup: string }, ResData[], unknown>(getEncode, { idxGroup: '0205' })
  ])
    .then(([encode01, encode02]) => {
      const t_this = _this
      const encodeMap = {
        encode01,
        encode02
        // encode03,
        // encode04,
        // encode05
      }
      //left-top图表请求参数

      const pro: any = providerList.data
      const providerListRqu: any = pro.data.map((ele: any) => ele.gysbm)

      const t: any = encode01.data
      const encodetopleft = t.data.map((v: any) => v.idxCde)

      const p = getDatesParamsNew([date], [citycode], encodetopleft, providerListRqu, businesstype)
      const leftTopParam: Prama = JSON.parse(p)

      const leffTop = requestPostData<Prama, ResData[], unknown>(encodeUrl, leftTopParam)
      //left-bottom图表请求参数
      // const leftBottomParam: Prama = []
      // const leffBottom = requestPostData<Prama, ResData[], unknown>(encodeUrl, leftBottomParam)

      const reqArr = [leffTop]

      handleAllDataRequest(t_this, reqArr, providerList, encodeMap)
    })
    .catch((e) => {
      console.log(e)
      _this.$message.error('指标加载失败,请刷新重试！')
    })
    .finally(() => {
      store.commit('setIsLoading', false)
    })
}

export { updateProviderKeypointView }
