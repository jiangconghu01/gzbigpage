import { createStore } from 'vuex'
export type PageType = 'allview' | 'detailview' | 'keypointview'
const curDate: Date = new Date()
const defDate: string =
  curDate.getMonth() === 0 ? curDate.getFullYear() - 1 + '-12' : curDate.getFullYear() + (curDate.getMonth() > 8 ? '-' + (curDate.getMonth() + 1) : '-0' + (curDate.getMonth() + 1))
window.sessionStorage.setItem('cityCode', 'A52')
window.sessionStorage.setItem('selectDate', defDate)
window.sessionStorage.setItem('buniessType', 'all')
export default createStore({
  state: {
    currntPage: 'allview',
    cityCode: 'A52',
    selectDate: defDate,
    buniessType: 'all',
    detailTabledate: {},
    allviewItems: {},
    isLoading: false
  },
  getters: {
    getCityCode(state) {
      return state.cityCode
    }
  },
  mutations: {
    setCurrentPage(state, curpage: PageType) {
      state.currntPage = curpage
    },
    setCityCode(state, city: string) {
      state.cityCode = city
      window.sessionStorage.setItem('cityCode', city)
    },
    setSelectDate(state, date: string) {
      state.selectDate = date
      window.sessionStorage.setItem('selectDate', date)
    },
    setBuniessType(state, type: string) {
      state.buniessType = type
      window.sessionStorage.setItem('buniessType', type)
    },
    setDetailTabledate(state, data: Record<string, string>[]) {
      state.detailTabledate = data
    },
    setAllviewItems(state, data: Record<string, string>[]) {
      state.allviewItems = data
    },
    setIsLoading(state, load: boolean) {
      state.isLoading = load
    }
  },
  actions: {},
  modules: {}
})
