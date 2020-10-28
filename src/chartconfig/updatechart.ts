import { pageChartsConfig, PageView, PageName } from './installchart'
const updateChartsConfg: Record<PageName, PageView<Record<string, any>>> = JSON.parse(JSON.stringify(pageChartsConfig))
updateChartsConfg.providerAllView.child['all-view-left-top']
const updageChartsDataFun = () => {
  console.log(1)
}
export default updageChartsDataFun
