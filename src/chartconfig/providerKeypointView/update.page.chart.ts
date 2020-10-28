import { requestPostData } from '../../http/http'
import { AxiosResponse } from 'axios'
import { pageChartsConfig } from '../installchart'
import { getDatesParams } from '../../utils/commFun'
import store from '../../store/index'
// import { encodeUrl } from '../static'
//取供应商接口
const getProvider = '/bigScreen/guiz/supplierIndexData/supplierList'
//取图形的指标接口，图形编码从上到下，从左到右0101，0102（总览图：01，重点图：02，详情图：03）
const getEncode = '/bigScreen/guiz/supplierIndexData/indexGroups'
//取指标值的接口
const encodeUrl = '/bigScreen/guiz/supplierIndexData/indexValues'
//请求和返回值类型，err统一类型后端暂未定义
interface ResData {
  accountCode: string
  monthId: string
  ywlx: string
  gysbm: string
  idxCde: string
  idxValue?: string
}
type Prama = ResData[]

//left-top 图表的数据更新逻辑
function handleLeftTopChart(resData: AxiosResponse<ResData[]>) {
  let config = pageChartsConfig.providerKeypointView.child['keypoint-view-top-left']
  config = {}
  console.log(resData)
}

function handleAllDataRequest(_this: Record<string, any>, reqArr: Promise<AxiosResponse<ResData[]>>[], providerList: any, encodeList: Record<string, any>) {
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
//全局统一参数
const date = store.state.selectDate
const citycode = store.state.cityCode
const businesstype = store.state.buniessType

const updateProviderKeypointView = async (_this: Record<string, any>) => {
  //请求供应商编码和名称
  const providerList = await requestPostData(getProvider, { accountCode: citycode, monthId: date, ywlx: businesstype })
  //获取该页面所有图表的指标编码
  Promise.all([
    requestPostData(getEncode, { idxGroup: '0201' }),
    requestPostData(getEncode, { idxGroup: '0202' }),
    requestPostData(getEncode, { idxGroup: '0203' }),
    requestPostData(getEncode, { idxGroup: '0204' }),
    requestPostData(getEncode, { idxGroup: '0205' })
  ])
    .then(([encode01, encode02, encode03, encode04, encode05]) => {
      const t_this = _this
      const encodeMap = {
        encode01,
        encode02,
        encode03,
        encode04,
        encode05
      }
      //left-top图表请求参数
      const leftTopParam: Prama = []
      const leffTop = requestPostData<Prama, ResData[], any>(encodeUrl, leftTopParam)
      //left-bottom图表请求参数
      const leftBottomParam: Prama = []
      const leffBottom = requestPostData<Prama, ResData[], any>(encodeUrl, leftBottomParam)
      const reqArr = [leffTop, leffBottom]
      handleAllDataRequest(t_this, reqArr, providerList, encodeMap)
    })
    .catch((e) => {
      _this.$message.error('指标加载失败,请刷新重试！')
    })
}

export { updateProviderKeypointView }
