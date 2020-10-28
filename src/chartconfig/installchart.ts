import option1 from './providerAllView/left.top.pie'
import option2 from './providerKeypointView/top.right.bar'
import { onMounted } from 'vue'
import echarts from 'echarts'

export interface PageView<T> {
  child: T
  page?: string
  title?: string
}
export type PageName = 'providerAllView' | 'providerDetailView' | 'providerKeypointView'
interface FuncPstringVoid {
  (page: PageName): void
}
export const pageChartsConfig: Record<PageName, PageView<Record<string, any>>> = {
  providerAllView: {
    child: {
      'all-view-left-top': option1,
      'all-view-left-bottom': '',
      'all-view-center-bottom': '',
      'all-view-right-top': '',
      'all-view-right-bottom': ''
    },
    page: ''
  },
  providerDetailView: {
    child: {
      'detail-view-top-left': '',
      'detail-view-top-center': '',
      'detail-view-top-right': '',
      'detail-view-bottom-left': '',
      'detail-view-bottom-right': ''
    },
    page: ''
  },
  providerKeypointView: {
    child: {
      'keypoint-view-top-left': '',
      'keypoint-view-top-right': option2,
      'keypoint-view-bottom-left': '',
      'keypoint-view-bottom-center': '',
      'keypoint-view-bottom-right': ''
    },
    page: ''
  }
}
const inintCharts: FuncPstringVoid = (page: PageName) => {
  const currentPage = pageChartsConfig[page]['child']
  onMounted(() => {
    Object.keys(currentPage).forEach((val: string) => {
      const box = echarts.init(document.getElementById(val) as HTMLDivElement)
      currentPage[val] && box.setOption(currentPage[val])
    })
  })
}
export default inintCharts
