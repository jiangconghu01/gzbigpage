import { createStore } from 'vuex'
export type PageType = 'allview' | 'detailview' | 'keypointview'
const curDate: Date = new Date()
const defDate: string =
  curDate.getMonth() === 0 ? curDate.getFullYear() - 1 + '12' : curDate.getFullYear() + (curDate.getMonth() > 8 ? curDate.getMonth() + 1 + '' : '0' + (curDate.getMonth() + 1)) + curDate.getMonth()
export default createStore({
  state: {
    currntPage: 'allview',
    cityCode: 'A52',
    selectDate: defDate,
    buniessType: 'all',
    isLoading: false
  },
  getters: {},
  mutations: {
    setCurrentPage(state, curpage: PageType) {
      state.currntPage = curpage
    },
    setCityCode(state, city: string) {
      state.cityCode = city
    },
    setSelectDate(state, date: string) {
      state.selectDate = date
    },
    setBuniessType(state, type: string) {
      state.buniessType = type
    },
    setIsLoading(state, load: boolean) {
      state.isLoading = load
    }
  },
  actions: {},
  modules: {}
})
