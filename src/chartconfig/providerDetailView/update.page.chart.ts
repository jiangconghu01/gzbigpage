import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams } from '../../utils/commFun'
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
interface ResponseBody {
  code?: number | string | null
  data: ResData[]
}
interface ResData {
  accountCode: string
  monthId: string
  ywlx: string
  gysbm: string
  idxCde: string
  idxCode?: string
  gysmc?: string
  idxValue?: string
  xh?: string
  idxName?: string
}
type Prama = ResData[]

//top-left 图表的数据更新逻辑
function handleTopLeftChart(resData: AxiosResponse<ResponseBody>) {
  let config = pageChartsConfig.providerDetailView.child['keypoint-view-top-left']
  config = {}
  console.log(resData)
}

function handleAllDataRequest(_this: Record<string, any>, reqArr: Promise<AxiosResponse<ResponseBody>>[], providerList: any, encodeList: Record<string, any>) {
  Promise.all(reqArr)
    .then(([resLeffTop, resLeffBottom]) => {
      _this.$message.success('数据加载成功！')
      handleTopLeftChart(resLeffTop)
      setTimeout(() => {
        inintChartsUpdate('providerDetailView')
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

const updateProviderDetailView = async (_this: Record<string, any>) => {
  //全局统一参数
  // const date = store.state.selectDate
  const date = '202007'
  const citycode = store.state.cityCode
  const businesstype = store.state.buniessType

  let providerList: AxiosResponse<unknown>
  try {
    //请求供应商编码和名称
    providerList = await requestPostData<Record<string, string>, ResponseBody, unknown>(getProvider, { accountCode: citycode, monthId: date, ywlx: businesstype })
  } catch (error) {
    _this.$message.error('供应商编码加载失败,请刷新重试！')
  }
  //获取该页面所有图表的指标编码
  Promise.all([
    requestPostData<{ idxGroup: string }, ResponseBody, unknown>(getEncode, { idxGroup: '0301' }),
    requestPostData<{ idxGroup: string }, ResponseBody, unknown>(getEncode, { idxGroup: '0302' }),
    requestPostData<{ idxGroup: string }, ResponseBody, unknown>(getEncode, { idxGroup: '0303' }),
    requestPostData<{ idxGroup: string }, ResponseBody, unknown>(getEncode, { idxGroup: '0304' }),
    requestPostData<{ idxGroup: string }, ResponseBody, unknown>(getEncode, { idxGroup: '0305' }),
    requestPostData<{ idxGroup: string }, ResponseBody, unknown>(getEncode, { idxGroup: '0306' })
  ])
    .then(([encode01, encode02, encode03, encode04, encode05, encode06]) => {
      const t_this = _this
      const encodeMap = {
        encode01,
        encode02,
        encode03,
        encode04,
        encode05,
        encode06
      }
      //top-left图表请求参数
      const topLeftParam: Prama = []
      const topLeft = requestPostData<Prama, ResponseBody, unknown>(encodeUrl, topLeftParam)
      //bottom-eft图表请求参数

      const reqArr = [topLeft]
      handleAllDataRequest(t_this, reqArr, providerList, encodeMap)
    })
    .catch((e) => {
      _this.$message.error('指标加载失败,请刷新重试！')
    })
    .finally(() => {
      store.commit('setIsLoading', false)
    })
}

export { updateProviderDetailView }
